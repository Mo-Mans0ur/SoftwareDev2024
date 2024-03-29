import fetch from 'node-fetch';

const webhookUrl = 'http://localhost:8080/register';
const eventToListen = 'invoice_created';
const notificationUrl = 'http://mosurl.com/webhook'; 

async function registerWebhook() {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventToListen,
        url: notificationUrl,
      }),
    });

    // Check if the Content-Type header is application/json
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      console.log('Webhook registered:', data);
    } else {
      // If not, read the response as text and log it
      const text = await response.text();
      throw new Error(`Expected JSON response, but received: ${text}`);
    }
  } catch (error) {
    console.error('Error registering webhook:', error);
  }
}

registerWebhook();
