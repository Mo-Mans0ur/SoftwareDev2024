// webhookHandlers.js
import fetch from 'node-fetch';
import fs from 'fs';

const webhooksFilePath = './webhooks.json';
const webhooks = fs.existsSync(webhooksFilePath) ? JSON.parse(fs.readFileSync(webhooksFilePath, 'utf8')) : {};

function saveWebhooksToFile() {
    fs.writeFileSync(webhooksFilePath, JSON.stringify(webhooks, null, 2), 'utf8');
}

export function registerWebhook(event, url) {
    if (!webhooks[event]) {
        webhooks[event] = [];
    }
    if (!webhooks[event].includes(url)) {
        webhooks[event].push(url);
        saveWebhooksToFile();
    }
}

export function unregisterWebhook(event, url) {
    if (webhooks[event]) {
        webhooks[event] = webhooks[event].filter((webhookUrl) => webhookUrl !== url);
        saveWebhooksToFile();
    }
}

export function triggerWebhook(eventType, data) {
    const webhookUrls = webhooks[eventType];
    if (!webhookUrls) return;

    webhookUrls.forEach(url => {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event: eventType, data }),
        })
        .then(response => console.log(`Triggered webhook for ${eventType}: ${url} with status: ${response.status}`))
        .catch(error => console.error(`Error triggering webhook for ${eventType}: ${error}`));
    });
}
