import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
    console.log("New connection");

    ws.send(JSON.stringify({ message: "Welcome to the server" }));

    ws.on("message", (message) => {
        console.log("Received", message);

        const response = `Server: ${message.toString()}`;

        ws.send(JSON.stringify({ message: response }));
    });

    ws.on("close", () => {
        console.log("Connection closed");
    });
});

console.log("Server is running on port 8080");
