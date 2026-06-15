import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    console.log('Running server with local storage fallback...');
  });

// Schema for contact messages
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

import nodemailer from 'nodemailer';

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail App Password
  }
});

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Prepare Email Options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'dipakthakur435@gmail.com',
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

    // Attempt to Send Email
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to dipakthakur435@gmail.com');
      } else {
        console.log('Nodemailer skipped: EMAIL_USER and EMAIL_PASS not set in .env');
      }
    } catch (mailError) {
      console.error('Failed to send email:', mailError);
    }

    // Attempt to save to MongoDB
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ name, email, subject, message });
      await newContact.save();
      return res.status(201).json({ message: 'Message sent and saved successfully!' });
    } else {
      // Fallback log to console/mock
      console.log('MongoDB not connected. Logged message:', { name, email, subject, message });
      return res.status(201).json({ message: 'Message received and email attempted (local storage fallback active)' });
    }
  } catch (error) {
    console.error('Error handling contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
