import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #fafafa; border-radius: 16px;">
          <h2 style="margin: 0 0 24px; color: #3b82f6; font-size: 20px;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #71717a; font-size: 13px; width: 80px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #71717a; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; font-size: 14px;">
                <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #71717a; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; font-size: 14px; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <p style="margin: 24px 0 0; font-size: 11px; color: #52525b;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
