import React, { useState, useEffect } from 'react';
import './index.css';
import Chat from './templates/Chat/Chat';
import StarusUser from './templates/StatusUser/StarusUser';
import { socket } from './socket';

function App() {

  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [personalData, setPersonalData] = useState([])

  const [currentChat, setCurrentChat] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log('connected')
    }

    function getUsersList(usersList) {
      setUsers(usersList)
    }

    function receivePersonalData(data) {
      setPersonalData(data)
    }

    function receiveMessagesList(data) {
      setMessages(data)
    }


    socket.on('connect', onConnect);
    socket.on('usersList', getUsersList);
    socket.on('personalData', receivePersonalData)
    socket.on('messagesList', receiveMessagesList)

    return () => {
      socket.off('connect', onConnect);
    };
  }, [users]);

  return (
    <div className="main-wrapper">
      <Chat 
      currentChat={currentChat} currentUser={currentUser}
      messagesList={messages} myData={personalData} users={users}/>
      <StarusUser funcC={setCurrentChat} 
      func={setCurrentUser} data={personalData} users={users} />
    </div>
  );
}

export default App;
