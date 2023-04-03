import React from 'react';
import ChatHeader from './ChatHeader';
import ChatWindow from './ChatWindow';

export default function Chat({ currentChat,
    currentUser, messagesList, myData, users }) {
    return (
        <div className="main-wrap">
            <ChatHeader currentUser={currentUser} data={myData} users={users} />
            <ChatWindow currentChat={currentChat} 
            currentUser={currentUser}
            personalData={myData} 
                messages={messagesList} />
        </div>
    )
}
