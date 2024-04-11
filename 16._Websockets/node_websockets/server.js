import { WebSocketServer } from "ws";

// Create a new WebSocket server
const PORT = process.env.PORT ?? 8080;

const server = new WebSocketServer({ port: PORT });

server.on("connection", (ws) => {
    console.log("Client connected", server.clients.size);

    ws.on("message", (message) => {
        console.log(`Received:" ${message}`);
        server.clients.forEach((client) => {
            client.send(message);
        });
    });
    
    ws.on("close", () => {
        console.log("Client disconnected", server.clients.size);
    });
    
});