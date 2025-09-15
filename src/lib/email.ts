import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to other services like 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Email templates
export const emailTemplates = {
  contactSection: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message: string;
  }) => ({
    subject: `New Contact Form Submission - ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: #e0e0e0; margin: 10px 0 0 0;">Someone has submitted the contact form from the main page</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Name:</strong>
            <p style="margin: 5px 0; color: #555;">${data.firstName} ${data.lastName}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Email:</strong>
            <p style="margin: 5px 0; color: #555;">${data.email}</p>
          </div>
          
          ${data.phone ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Phone:</strong>
            <p style="margin: 5px 0; color: #555;">${data.phone}</p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Message:</strong>
            <p style="margin: 5px 0; color: #555; line-height: 1.6; background: #f8f9fa; padding: 15px; border-radius: 5px;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This email was sent from your FutureTech website contact form.
            </p>
          </div>
        </div>
      </div>
    `,
  }),

  contactPage: (data: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }) => ({
    subject: `New Contact Page Submission - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Page Submission</h1>
          <p style="color: #e0e0e0; margin: 10px 0 0 0;">Someone has submitted the contact form from the contact page</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Name:</strong>
            <p style="margin: 5px 0; color: #555;">${data.name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Email:</strong>
            <p style="margin: 5px 0; color: #555;">${data.email}</p>
          </div>
          
          ${data.company ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Company:</strong>
            <p style="margin: 5px 0; color: #555;">${data.company}</p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Message:</strong>
            <p style="margin: 5px 0; color: #555; line-height: 1.6; background: #f8f9fa; padding: 15px; border-radius: 5px;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This email was sent from your FutureTech website contact page.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

// Function to send email
export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error };
  }
}

// Function to send contact form notifications
export async function sendContactSectionNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const template = emailTemplates.contactSection(data);
  return await sendEmail(process.env.NOTIFICATION_EMAIL!, template.subject, template.html);
}

export async function sendContactPageNotification(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  const template = emailTemplates.contactPage(data);
  return await sendEmail(process.env.NOTIFICATION_EMAIL!, template.subject, template.html);
}
