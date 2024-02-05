import React, { useEffect, useState, useRef } from 'react';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const messageInputRef = useRef(null);

    let d, m;
    let i = 0;

    useEffect(() => {
        // Initialize messages or load from the backend
        fakeMessage();

        // Focus on the message input when the component mounts
        messageInputRef.current.focus();
    }, []);

    const updateScrollbar = () => {
        // If you want to scroll to the bottom of the messages, you can use the ref
        // For example, if you set a ref for the messages container:
        // messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    };

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

        updateScrollbar();

        setTimeout(() => {
            fakeMessage();
        }, 1000 + Math.random() * 20 * 100);
    };

    const handleKeyDown = (e) => {
        if (e.which === 13) {
            insertMessage();
        }
    };

    const Fake = [
        'Hi there, I\'m Fabio and you?',
        'Nice to meet you',
        'How are you?',
        // ... other messages
    ];

    const fakeMessage = () => {
        if (messageInputRef.current.value.trim() !== '') {
            return;
        }

        setMessages(prevMessages => [
            ...prevMessages,
            { type: 'loading' }
        ]);

        updateScrollbar();

        setTimeout(() => {
            setMessages(prevMessages => [
                ...prevMessages.slice(0, -1),
                { type: 'new', text: Fake[i] }
            ]);
            setDate();
            updateScrollbar();
            i++;
        }, 1000 + Math.random() * 20 * 100);
    };

    return (
        <div className="chat">
            {/* ... other components */}
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
