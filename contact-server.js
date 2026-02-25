const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, event_type, event_date, message } = req.body;
        
        // Validate required fields
        if (!name || !email || !event_type || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }
        
        // Create email transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
        
        // Email content
        const emailContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Event Type:</strong> ${event_type}</p>
            ${event_date ? `<p><strong>Event Date:</strong> ${event_date}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Sent from Teahan Pro Audio & Lighting website</small></p>
        `;
        
        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
            subject: `New Contact Form: ${name} - ${event_type}`,
            html: emailContent
        });
        
        // Send confirmation email to customer
        const confirmationEmail = `
            <h2>Thank you for contacting Teahan Pro Audio & Lighting!</h2>
            <p>Dear ${name},</p>
            <p>We have received your message regarding your ${event_type} and will get back to you within 24 hours.</p>
            <p><strong>Your message details:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p>Best regards,<br>Teahan Pro Audio & Lighting Team</p>
            <hr>
            <p><small>
                Phone: +353 123 456 789<br>
                Email: info@teahansound.ie<br>
                Website: teahansound.ie
            </small></p>
        `;
        
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Thank you for contacting Teahan Pro Audio & Lighting',
            html: confirmationEmail
        });
        
        res.json({
            success: true,
            message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
        });
        
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Sorry, there was an error sending your message. Please try again.'
        });
    }
});

// Serve the main HTML file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Teahan Sound website running on http://localhost:${PORT}`);
    console.log('Contact form endpoint: /api/contact');
});

module.exports = app;
