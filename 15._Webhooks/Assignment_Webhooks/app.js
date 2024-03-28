// app.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { registerWebhook, unregisterWebhook, triggerWebhook } from './webhookHandlers.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { event, url } = req.body;
    if (!event || !url) {
        return res.status(400).json('Please provide an event and a URL.');
    }
    registerWebhook(event, url);
    res.status(200).json(`Webhook for "${event}" registered successfully.`);
});

app.post('/unregister', (req, res) => {
    const { event, url } = req.body;
    if (!event || !url) {
        return res.status(400).send('Please provide an event and a URL.');
    }
    unregisterWebhook(event, url);
    res.status(200).send(`Webhook for "${event}" unregistered successfully.`);
});

// Example invoice creation route
app.post('/invoices/create', (req, res) => {
    const invoice = req.body; 
    triggerWebhook('invoice_created', invoice);
    res.status(201).send({ message: 'Invoice created successfully', invoice });
});

// Example invoice update route
app.put('/invoices/update/:id', (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    triggerWebhook('invoice_updated', { id, updateData });
    res.status(200).send({ message: 'Invoice updated successfully', id, updateData });
});

// Example payment received route
app.post('/payments/received', (req, res) => {
    const paymentInfo = req.body; 
    triggerWebhook('payment_received', paymentInfo);
    res.status(200).send({ message: 'Payment received successfully', paymentInfo });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
