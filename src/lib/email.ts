import nodemailer from 'nodemailer'

export function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendContactEmail(data: {
  name: string
  email: string
  phone?: string
  service: string
  eventType: string
  eventDate?: string
  message: string
}) {
  const transporter = createTransporter()
  const recipient = process.env.RECIPIENT_EMAIL || 'info@teahansound.ie'

  const serviceLabels: Record<string, string> = {
    audio: 'Audio Services',
    lighting: 'Lighting Services',
    visual: 'Visual Services',
    stage: 'Stage & Set Services',
    both: 'Audio + Lighting',
    full: 'Full Production',
  }

  const eventLabels: Record<string, string> = {
    concert: 'Concert / Festival',
    festival: 'Festival',
    corporate: 'Corporate Event',
    wedding: 'Wedding',
    school: 'School / Education',
    other: 'Other',
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f172a; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #3b82f6; margin: 0; font-size: 24px;">New Contact Enquiry</h1>
        <p style="color: #94a3b8; margin: 4px 0 0;">Teahan Pro Audio & Lighting</p>
      </div>
      <div style="background: #1e293b; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #334155;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Name:</strong></td>
            <td style="padding: 8px 0; color: #f1f5f9;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #f1f5f9;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td>
          </tr>
          ${data.phone ? `<tr><td style="padding: 8px 0; color: #94a3b8;"><strong>Phone:</strong></td><td style="padding: 8px 0; color: #f1f5f9;">${data.phone}</td></tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Service:</strong></td>
            <td style="padding: 8px 0; color: #f1f5f9;">${serviceLabels[data.service] || data.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Event Type:</strong></td>
            <td style="padding: 8px 0; color: #f1f5f9;">${eventLabels[data.eventType] || data.eventType}</td>
          </tr>
          ${data.eventDate ? `<tr><td style="padding: 8px 0; color: #94a3b8;"><strong>Event Date:</strong></td><td style="padding: 8px 0; color: #f1f5f9;">${data.eventDate}</td></tr>` : ''}
        </table>
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #334155;">
          <p style="color: #94a3b8; margin: 0 0 8px;"><strong>Message:</strong></p>
          <p style="color: #f1f5f9; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #334155;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">Sent from teahansound.ie contact form</p>
        </div>
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"Teahan Sound Website" <${process.env.SMTP_USER}>`,
    to: recipient,
    replyTo: data.email,
    subject: `New Enquiry from ${data.name} — ${serviceLabels[data.service] || data.service}`,
    html,
  })

  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f172a; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #3b82f6; margin: 0; font-size: 24px;">Thank you for getting in touch!</h1>
      </div>
      <div style="background: #1e293b; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #334155;">
        <p style="color: #f1f5f9;">Dear ${data.name},</p>
        <p style="color: #94a3b8; line-height: 1.6;">
          We've received your enquiry about <strong style="color: #f1f5f9;">${serviceLabels[data.service] || data.service}</strong> 
          for your ${eventLabels[data.eventType] || data.eventType}. We'll get back to you within 24 hours.
        </p>
        <p style="color: #94a3b8; line-height: 1.6;">
          In the meantime, feel free to browse our 
          <a href="https://teahansound.ie/projects" style="color: #3b82f6;">recent projects</a> 
          or call us directly if your enquiry is urgent.
        </p>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #334155;">
          <p style="color: #64748b; font-size: 13px; margin: 0;">
            Teahan Pro Audio & Lighting<br>
            📧 info@teahansound.ie<br>
            🌐 teahansound.ie
          </p>
        </div>
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"Teahan Pro Audio & Lighting" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: 'Thank you for contacting Teahan Pro Audio & Lighting',
    html: confirmationHtml,
  })
}
