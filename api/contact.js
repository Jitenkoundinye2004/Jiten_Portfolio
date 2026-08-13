import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { user_name, user_email, subject, message } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Ensure environment variables are set in Vercel
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.error('Missing EMAIL_USER or EMAIL_PASS environment variables.');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use 'gmail' or configure SMTP settings for other providers
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"${user_name}" <${emailUser}>`,
      replyTo: user_email,
      to: emailUser, // Send the email to yourself
      subject: `Portfolio Contact: ${subject || 'New Message from ' + user_name}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${user_name}\nEmail: ${user_email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <h4>Message:</h4>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
