import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const appendToFile = (filename, data) => {
  const filePath = path.join(DATA_DIR, filename);
  const entries = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : [];
  entries.push({ ...data, timestamp: new Date().toISOString() });
  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ to, subject, html }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email not configured — skipping send');
    return;
  }
  try {
    await transporter.sendMail({ from: `"Aura Digital" <${process.env.EMAIL_USER}>`, to, subject, html });
    console.log(`Email sent to ${to}`);
  } catch (err) {
    console.error('Email error:', err.message);
  }
};

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }
  appendToFile('contacts.json', { name, email, phone, service, message });
  console.log(`New contact from ${name} <${email}>`);

  await sendEmail({
    to: process.env.EMAIL_USER || 'hello@auradigital.pk',
    subject: `New Contact: ${name} — ${service || 'General'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Service:</strong> ${service || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  res.json({ success: true, message: 'Thank you! We will get back to you shortly.' });
});

app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: 'Email is required.' });
  appendToFile('newsletter.json', { email });
  console.log(`New newsletter subscriber: ${email}`);

  await sendEmail({
    to: process.env.EMAIL_USER || 'hello@auradigital.pk',
    subject: 'New Newsletter Subscription',
    html: `<p><strong>New subscriber:</strong> ${email}</p>`,
  });

  res.json({ success: true, message: 'Successfully subscribed!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Aura Digital API running on http://localhost:${PORT}`);
  if (!process.env.EMAIL_USER) console.log('Email not configured — set EMAIL_USER and EMAIL_PASS env vars');
});
