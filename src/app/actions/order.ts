'use server';

import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitOrder(data: {
  fullName: string;
  phone: string;
  whatsapp: string;
  address: string;
  package: string;
  upsell: boolean;
}) {
  try {
    const { 
      fullName, 
      phone, 
      whatsapp, 
      address, 
      package: selectedPackage,
      upsell 
    } = data;

    // Validate the API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return { success: false, error: 'Internal configuration error: API key missing' };
    }

    const packageNames: Record<string, string> = {
      pkg1: '1 Pack + 1 Free (₦27,000)',
      pkg2: '2 Packs + 2 Free (₦44,000) - BEST SELLER',
      pkg3: '10 Packs Bulk (₦105,000)',
    };

    const { error } = await resend.emails.send({
      from: 'Ageless Beauty Orders <onboarding@resend.dev>',
      to: ['cckelles@gmail.com'],
      subject: `New Order from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
          <h1 style="color: #6366f1;">New Order Details</h1>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Customer Name:</strong> ${fullName}</p>
          <p><strong>Package selected:</strong> ${packageNames[selectedPackage] || selectedPackage}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || 'N/A'}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Upsell (Botox Solution):</strong> ${upsell ? 'Yes' : 'No'}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">Submitted via Ageless Beauty Landing Page</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: error.message || 'Failed to send email via Resend' };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Submission processing error:', err);
    return { success: false, error: err.message || 'An unexpected error occurred during submission' };
  }
}
