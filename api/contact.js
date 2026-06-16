import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

// MongoDB Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Avoid OverwriteModelError in Serverless Environments
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // 1. Connect to MongoDB Atlas (Serverless optimized)
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI);
    }

    // 2. Save to Database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // 3. Send Email using Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'dipakthakur435@gmail.com', // Your receiving email
        subject: `New Portfolio Message: ${subject}`,
        html: `
          <h3>You have a new message from your portfolio website!</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      // We wait for email to send on Vercel because Serverless functions 
      // get killed immediately after res.send()
      await transporter.sendMail(mailOptions);
    }

    return res.status(201).json({ message: 'Message sent and saved successfully!' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
