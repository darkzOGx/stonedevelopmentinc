import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Stone Development Inc.',
  description: 'Get in touch with Stone Development Inc. to schedule a consultation for your next luxury construction project in Southern California.',
  alternates: { canonical: 'https://stonedevelopmentinc.com/contact' }
}

export default function ContactPage() {
  return (
    <main>
      <div className="speakable-summary sr-only">
        Contact Stone Development Inc. at (949) 508-6763 or visit our office at 1 Jenner Suite 150, Irvine, CA to discuss your luxury construction or remodeling project.
      </div>
      <ContactClient />
    </main>
  );
}
