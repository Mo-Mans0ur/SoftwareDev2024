import express from 'express';


const app = express();
const PORT = 8080; // Make sure this port is different from Server A's port

const serverAUrl = 'http://localhost:8000'; // Replace with Server A's URL

app.get('/data/json', async (req, res) => {
    try {
        const response = await fetch(`${serverAUrl}/data/json`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/data/xml', async (req, res) => {
    try {
        const response = await fetch(`${serverAUrl}/data/xml`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/data/csv', async (req, res) => {
    try {
        const response = await fetch(`${serverAUrl}/data/csv`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/data/yaml', async (req, res) => {
    try {
        const response = await fetch(`${serverAUrl}/data/yaml`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/data/txt', async (req, res) => {
    try {
        const response = await fetch(`${serverAUrl}/data/txt`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => console.log(`Server B is running on port ${PORT}`));