import { useEffect, useState } from "react";

interface Message {
    message: string;
}

export const WebSocketComponent = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");
    const [ws, setWs] = useState<WebSocket | null>(null);

    const sendMessage = () => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            setMessages((prev) => [...prev, `You: ${input}`]);
            ws.send(input);
            setInput("");
        } else {
            console.error("WebSocket is not open");
        }
    };

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");
        setWs(socket);

        socket.onopen = () => {
            console.log("Connected to server");
        };

        socket.onmessage = (event) => {
            const data: Message = JSON.parse(event.data);
            setMessages((prev) => [...prev, data.message]);
        };

        socket.onclose = () => {
            console.log("Connection closed");
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h1>Chat</h1>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>

            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};
