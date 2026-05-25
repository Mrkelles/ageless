
'use server';

import { Resend } from 'resend';
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitOrder(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const whatsapp = formData.get('whatsapp') as string;
  const address = formData.get('address') as string;
  const pkg = formData.get('package') as string;
  const upsell = formData.get('upsell') === 'on' ? 'Yes' : 'No';

  const packageNames: Record<string, string> = {
    pkg1: '1 Pack + 1 Free (₦27,000)',
    pkg2: '2 Packs + 2 Free (₦44,000) - BEST SELLER',
    pkg3: '10 Packs Bulk (₦105,000)',
  };

  try {
    await resend.emails.send({
      from: 'Ageless Beauty <onboarding@resend.dev>',
      to: 'cckelles@gmail.com',
      subject: `New Order: ${name} - ${packageNames[pkg] || pkg}`,
      html: `
        <h1>New Order Received!</h1>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'N/A'}</p>
        <p><strong>Delivery Address:</strong> ${address}</p>
        <p><strong>Selected Package:</strong> ${packageNames[pkg] || pkg}</p>
        <p><strong>Add Botox Solution (Upsell):</strong> ${upsell}</p>
      `,
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    return { error: 'Failed to process order. Please try again.' };
  }

  redirect('/thank-you');
}
