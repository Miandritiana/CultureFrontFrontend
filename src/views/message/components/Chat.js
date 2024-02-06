import React, { useState, useRef } from 'react';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const messageInputRef = useRef(null);

    let d, m;

    const setDate = () => {
        d = new Date();
        if (m !== d.getMinutes()) {
            m = d.getMinutes();
            setMessages(prevMessages => [
                ...prevMessages,
                { type: 'timestamp', text: `${d.getHours()}:${m}` }
            ]);
        }
    };

    const insertMessage = () => {
        const msg = messageInputRef.current.value.trim();
        if (!msg) return;

        setMessages(prevMessages => [
            ...prevMessages,
            { type: 'personal', text: msg }
        ]);

        setDate();

        // Clear the input field
        messageInputRef.current.value = '';
    };

    const handleKeyDown = (e) => {
        if (e.which === 13) {
            insertMessage();
        }
    };

    return (
        <div className="chat">
            <div className="messages">
                <div className="messages-content">
                    {/* Render messages */}
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.type}`}>
                            {message.type === 'loading' ? (
                                <figure className="avatar">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" alt="loading" />
                                </figure>
                            ) : null}
                            <span>{message.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="message-box">
                <textarea
                    ref={messageInputRef}
                    type="text"
                    className="message-input"
                    placeholder="Type message..."
                    onKeyDown={handleKeyDown}
                />
                <button type="submit" className="message-submit" onClick={insertMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
