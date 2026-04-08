// Install: npm install @emailjs/browser
// Sign up at https://www.emailjs.com and create a service + template
// Add to your .env:
//   VITE_EMAILJS_SERVICE_ID=your_service_id
//   VITE_EMAILJS_TEMPLATE_ID=your_template_id
//   VITE_EMAILJS_PUBLIC_KEY=your_public_key

import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * @param {Record<string, string>} answers
 * @returns {Promise<void>}
 */
export async function sendBookingEmail(answers) {
  const templateParams = {
    ...answers,
    booking_summary: Object.entries(answers)
      .map(([k, v]) => `${k.toUpperCase()}: ${v}`)
      .join('\n'),
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}