import { WebSocket } from "ws";

// Create a new WebSocket client
const WebSocketClient = new WebSocket("ws://localhost:8080");

WebSocketClient.on("open", () => {
    WebSocketClient.send("Hello, server!");

    WebSocketClient.on("message", (message) => {
        console.log(`Received from server:" ${message}`);
        WebSocketClient.close();
    });
});