import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { LOCATION_PAGES } from '../lib/location-pages.ts';
import { SERVICE_PAGES } from '../lib/service-pages.ts';
import {
  SERVICE_LOCATION_PAGES,
  getServiceLocationPath,
} from '../lib/service-location-pages.ts';
import { SITE_URL } from '../lib/site.ts';
import { BLOG_POSTS } from '../src/data/blog-posts.ts';

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const PUBLIC_DIR = join(process.cwd(), 'public');
const STATIC_PATHS = [
  '/',
  '/about',
  '/services',
  '/locations',
  '/contact',
  '/portfolio',
  '/blog',
  '/resources',
  '/resources/cost-guide',
  '/resources/budget-calculator',
  '/resources/contractor-checklist',
  '/resources/adu-starter-kit',
  '/resources/roi-report',
  '/resources/10-costly-mistakes',
  '/resources/project-timeline',
  '/resources/design-lookbook',
  '/resources/permit-guide',
  '/resources/planning-workbook',
  '/resources/maintenance-checklist',
  '/resources/adu-vs-addition',
];

function printUsage() {
  console.log('Usage:');
  console.log('  npm run submit:indexnow -- --all');
  console.log('  npm run submit:indexnow -- /services /services/kitchen-remodeling /blog/some-post');
  console.log('  npm run submit:indexnow -- --dry-run --all');
}

function findKeyFile() {
  const txtFiles = readdirSync(PUBLIC_DIR).filter((file) => file.endsWith('.txt'));
  const matchingFile = txtFiles.find((file) => {
    const content = readFileSync(join(PUBLIC_DIR, file), 'utf8').trim();
    return content && `${content}.txt` === file;
  });

  if (!matchingFile) {
    throw new Error('No valid IndexNow key file was found in public/.');
  }

  const key = readFileSync(join(PUBLIC_DIR, matchingFile), 'utf8').trim();

  return {
    key,
    keyLocation: `${SITE_URL}/${matchingFile}`,
  };
}

function normalizeUrl(input) {
  if (input.startsWith('http://') || input.startsWith('https://')) {
    return input;
  }

  return `${SITE_URL}${input.startsWith('/') ? input : `/${input}`}`;
}

function collectAllUrls() {
  const serviceUrls = SERVICE_PAGES.map((service) => `${SITE_URL}/services/${service.slug}`);
  const locationUrls = LOCATION_PAGES.map((location) => `${SITE_URL}/locations/${location.slug}`);
  const serviceLocationUrls = SERVICE_LOCATION_PAGES.map(
    (page) => `${SITE_URL}${getServiceLocationPath(page.serviceSlug, page.locationSlug)}`
  );
  const projectFile = readFileSync(join(process.cwd(), 'lib', 'projects.ts'), 'utf8');
  const projectUrls = [...projectFile.matchAll(/slug:\s*'([^']+)'/g)].map(
    (match) => `${SITE_URL}/portfolio/${match[1]}`
  );
  const blogUrls = BLOG_POSTS.filter((post) => !post.noindex && !post.canonicalTo).map(
    (post) => `${SITE_URL}/blog/${post.slug}`
  );

  return [
    ...STATIC_PATHS.map((path) => `${SITE_URL}${path === '/' ? '' : path}`),
    ...serviceUrls,
    ...locationUrls,
    ...serviceLocationUrls,
    ...projectUrls,
    ...blogUrls,
  ];
}

function chunk(array, size) {
  const chunks = [];

  for (let index = 0; index < array.length; index += size) {
    chunks.push(array.slice(index, index + size));
  }

  return chunks;
}

async function submitUrlBatch({ key, keyLocation, urls, dryRun }) {
  const payload = {
    host: new URL(SITE_URL).host,
    key,
    keyLocation,
    urlList: urls,
  };

  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const body = await response.text();

  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow request failed with ${response.status}: ${body}`);
  }

  console.log(`Submitted ${urls.length} URL(s) to IndexNow: HTTP ${response.status}`);
}

async function main() {
  if (!existsSync(PUBLIC_DIR)) {
    throw new Error('public/ directory was not found.');
  }

  const args = process.argv.slice(2);

  if (args.includes('--help')) {
    printUsage();
    return;
  }

  const dryRun = args.includes('--dry-run');
  const submitAll = args.includes('--all');
  const rawUrls = args.filter((arg) => !arg.startsWith('--'));
  const urls = submitAll ? collectAllUrls() : rawUrls.map(normalizeUrl);

  if (urls.length === 0) {
    printUsage();
    throw new Error('No URLs were provided. Pass --all or one or more changed URLs.');
  }

  const normalizedUrls = [...new Set(urls)].filter((url) => url.startsWith(SITE_URL));
  const keyData = findKeyFile();

  for (const group of chunk(normalizedUrls, 10000)) {
    await submitUrlBatch({
      ...keyData,
      urls: group,
      dryRun,
    });
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
