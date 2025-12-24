import nodemailer from 'nodemailer';
import type { BookingFormData } from '../shared/types';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendLeadNotification(data: BookingFormData) {
  const retreatName = data.retreatId; // Will be enhanced with actual retreat name

  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to: process.env.EMAIL_TO_LEAD!,
    subject: `New Retreat Application - ${data.firstName} ${data.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #2c5530; border-bottom: 2px solid #2c5530; padding-bottom: 10px; }
          h3 { color: #4a7c4e; margin-top: 20px; }
          .info-row { margin: 8px 0; }
          .label { font-weight: bold; color: #555; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🏔️ New Retreat Application Received</h2>
          
          <h3>Personal Information</h3>
          <div class="info-row"><span class="label">Name:</span> ${data.firstName} ${data.lastName}</div>
          <div class="info-row"><span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a></div>
          <div class="info-row"><span class="label">Phone:</span> <a href="tel:${data.phone}">${data.phone}</a></div>
          
          <h3>Retreat Details</h3>
          <div class="info-row"><span class="label">Retreat:</span> ${retreatName}</div>
          <div class="info-row"><span class="label">Preferred Date:</span> ${data.preferredDate}</div>
          <div class="info-row"><span class="label">Number of Guests:</span> ${data.numberOfGuests}</div>
          
          <h3>Health & Dietary</h3>
          <div class="info-row"><span class="label">Dietary Restrictions:</span> ${data.dietaryRestrictions || 'None specified'}</div>
          <div class="info-row"><span class="label">Medical Conditions:</span> ${data.medicalConditions || 'None specified'}</div>
          
          <h3>Emergency Contact</h3>
          <div class="info-row"><span class="label">Name:</span> ${data.emergencyContact}</div>
          <div class="info-row"><span class="label">Phone:</span> <a href="tel:${data.emergencyPhone}">${data.emergencyPhone}</a></div>
          
          <h3>Additional Information</h3>
          <div class="info-row"><span class="label">Special Requests:</span> ${data.specialRequests || 'None'}</div>
          <div class="info-row"><span class="label">How They Heard About Us:</span> ${data.hearAboutUs || 'Not specified'}</div>
        </div>
      </body>
      </html>
    `,
  });
}

export async function sendConfirmationEmail(data: BookingFormData) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to: data.email,
    subject: 'Application Received - 7point83 Club',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #2c5530; }
          .summary-box { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .next-steps { background: #e8f4e8; padding: 15px; border-radius: 5px; border-left: 4px solid #2c5530; }
          ul { padding-left: 20px; }
          li { margin: 8px 0; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 14px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🙏 Thank you for your application!</h2>
          <p>Dear ${data.firstName},</p>
          
          <p>We've received your retreat application and are excited about the possibility of hosting you at 7point83 Club.</p>
          
          <div class="summary-box">
            <h3 style="margin-top: 0;">Application Summary</h3>
            <p><strong>Retreat:</strong> ${data.retreatId}</p>
            <p><strong>Preferred Start Date:</strong> ${data.preferredDate}</p>
            <p><strong>Number of Guests:</strong> ${data.numberOfGuests}</p>
          </div>
          
          <div class="next-steps">
            <h3 style="margin-top: 0;">Next Steps</h3>
            <ul>
              <li>We'll review your application within 24-48 hours</li>
              <li>You'll receive a confirmation email with next steps</li>
              <li>A ₹10,000 deposit will be required to secure your booking</li>
            </ul>
          </div>
          
          <p>If you have any questions in the meantime, feel free to reply to this email or call us at <a href="tel:+917point83club">+91 XXXXXXXXXX</a>.</p>
          
          <p class="footer">
            Best regards,<br/>
            <strong>The 7point83 Club Team</strong><br/>
            <em>Realign your rhythm with the Earth's heartbeat</em>
          </p>
        </div>
      </body>
      </html>
    `,
  });
}
