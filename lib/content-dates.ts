import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

export function getFileLastModified(relativePath: string, fallback?: string) {
  const filePath = join(/* turbopackIgnore: true */ process.cwd(), relativePath);

  if (existsSync(filePath)) {
    return statSync(filePath).mtime.toISOString();
  }

  return fallback ?? new Date('2026-03-31T12:00:00.000Z').toISOString();
}

export function toIsoDate(date: string) {
  return new Date(`${date}T12:00:00.000Z`).toISOString();
}
