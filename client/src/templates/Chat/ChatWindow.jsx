import React, { useEffect, useState } from 'react';
import { socket } from './../../socket';

export default function ChatWindow({ currentUser,
    currentChat, messages, personalData }) {

    const [chatMessage, setChatMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        if(chatMessage !== '' && currentUser) {
            socket.emit('message', {
                sender: personalData.username,
                receiver: currentUser?.username,
                text: chatMessage,
                type: currentUser?.type || 'user'
            });
            setChatMessage('')
            document.querySelector('#mymsg').value = ''
        }
    }

    useEffect(() => {
        const chatik = document.querySelector('.content-chat');
            chatik.scrollTop = chatik.scrollHeight;
    }, [messages])

    return (
        <div className="wrapper-chat">
            <div className="content-chat">
                {messages.map(message => {
                    if(message.chatId === parseInt(currentChat)) {
                        return (
                            <div
                                className={`${message.sender === personalData.username ? 'message-my message' : 'message-friend message'}`}>
                                <div className="message-friend__title">
                                    <p>{message.sender}</p>
                                </div>
                                <div className="message-friend__text">
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            
            <form onSubmit={sendMessage} className="btn-chat">
                <input type="text" placeholder="Message" 
                    id="mymsg"
                    defaultValue={chatMessage}
                    onChange={e => setChatMessage(e.target.value)}/>
                <button>Send</button>
            </form>

        </div>
    )
}
