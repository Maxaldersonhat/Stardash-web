const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

/**
 * @param {Record<string, string>} answers
 * @returns {Promise<void>}
 */
export async function sendBookingEmail(answers) {
  const payload = {
    access_key: ACCESS_KEY,
    subject: `New Booking Request — ${answers.service ?? 'Cleaning Service'}`,
    from_name: answers.contact ?? 'Booking Bot',
    ...answers,
    booking_summary: Object.entries(answers)
      .map(([k, v]) => `${k.toUpperCase()}: ${v}`)
      .join('\n'),
  };

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.message ?? 'Submission failed');
  }
}
