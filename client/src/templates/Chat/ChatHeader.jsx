import React, {useState} from 'react';
import imgPatrik from '../../images/img-patrik.png';
import icon from '../../images/icon.svg';
import StarusUser from '../StatusUser/StarusUser';


import imgEchoBot from '../../images/echobot.jpg';
import imgReverseBot from '../../images/reversebot.png';
import imgSpamBot from '../../images/spambot.jpg';
import imgIgnoreBot from '../../images/ignorebot.png';

const getBotAvatar = (type) => {
    switch (type) {
        case 'echoBot':
            return imgEchoBot

        case 'reverseBot':
            return imgReverseBot

        case 'spamBot':
            return imgSpamBot

        case 'ignoreBot':
            return imgIgnoreBot
        default:
            return imgPatrik;
    }
}

export default function ChatHeader({
    data, currentUser,
    status, statusFunc, users
}) {
   
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="chat-header">
            <div className="chat-header__img">
                <img src={getBotAvatar(currentUser?.type)} alt="img patrik" />
            </div>
            <div className="chat-header__text">
                <div className="chat-head">
                    {currentUser ? (
                        <p className="chat-header__text-title">{ currentUser?.name || currentUser.username}</p>
                    ) : (
                        <p className="chat-header__text-title">Lorem ipsum dolor</p>
                    )}
                    <img src={icon} alt="icon burger" onClick={e => setIsOpen(true)}/>
                </div>
                {currentUser ? (
                    <p className="chat-header__text-sub-title">
                        User bio
                    </p>
                ) : (
                    <p className="chat-header__text-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga adipisci porro natus ex cumque eaque quaerat voluptates est recusandae, nam quibusdam sed! Officia ipsam autem dolorum, eum eos quaerat odit!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga adipisci porro natus ex cumque eaqu
                    </p>
                )}
                
            </div>
            {isOpen && <StarusUser 
                users={users} data={data} status={isOpen} statusFunc={setIsOpen} 
            />}
        </div>
        
    )
}
