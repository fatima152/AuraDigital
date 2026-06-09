import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }
  appendToFile('contacts.json', { name, email, phone, service, message });
  console.log(`New contact from ${name} <${email}>`);
  res.json({ success: true, message: 'Thank you! We will get back to you shortly.' });
});

app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: 'Email is required.' });
  appendToFile('newsletter.json', { email });
  console.log(`New newsletter subscriber: ${email}`);
  res.json({ success: true, message: 'Successfully subscribed!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Aura Digital API running on http://localhost:${PORT}`);
});
