// Chat.js
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import { io } from 'socket.io-client';

const socket = io('http://localhost:7000'); // Connect to your Socket.IO server

const Id = () => {
    const { userId, reUserId } = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('receive-message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.off('receive-message');
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('send-message', { userId, reUserId, message });
            setMessages((prevMessages) => [...prevMessages, { userId, message }]); // Local update for instant feedback
            setMessage('');
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, borderRight: '1px solid #ccc', padding: '10px' }}>
                <h3>Sender ID: {userId}</h3>
                <div>
                    {messages.map((msg, index) => (
                        <div key={index}>
                            <strong>{msg.userId}: </strong>{msg.message}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>Receiver ID: {reUserId}</h3>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Id;
