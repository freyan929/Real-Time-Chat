import { useEffect, useState } from 'react';
import './style.css';

import io from 'socket.io-client';
import { render } from '@testing-library/react';

var date = new Date();
var s = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();

const ChatComponent = (props) => {
    const [messages, setMessages] = useState([]);
    const [chatMsg, setChatMsg] = useState('');
    const [userName, setUserName] = useState('');
    const [initial, setInitial] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(`http://localhost:8080/`);
        setSocket(newSocket);

        newSocket.on( 'message_sent', (data) => {
            console.log('received message', data);
            
            messages.push(data);
            setMessages([...messages]);
        });

        return () => newSocket.close();
    }, [setSocket, messages]);

    return (
        <div className='chat-container'>
            <div className='chat-header'>
                <h2>{`${props.chatname}`}</h2>
            </div>

            <div className='chat-messages-container'>
                {
                    (messages.length === 0) && <p style={{width: '100%', textAlign: 'center'}}>No Messages to be Read :(</p>
                }

                {
                    messages.map((message: string, userName: string, index: number) => {
                        return(
                            <ChatMessageComponent key={message.userName + index} name={message.name} message={message.msg} time={message.time}></ChatMessageComponent>
                        );
                    })
                }

                <div className='line-with-text-container'>
                    <p className='line-with-text'><span>{s}</span></p>
                </div>
            </div>

            <form className='input-container' onSubmit={(e) => {
                e.preventDefault();

                const data = {
                    name: userName,
                    msg: chatMsg,
                    time: new Date(),
                    initial: true
                };

                setChatMsg('');

                socket.emit('message_sent', data);
                }}> 

                <input placeholder={'Type your username...'} value={userName} onChange={(e)=>{
                    setUserName(e.target.value);
                    setInitial(false);
                }}></input>
                <input placeholder={'Type a new message...'} value={chatMsg} onChange={(e)=>{
                    setChatMsg(e.target.value);
                }}></input>
                <button><strong>{'>>'}</strong></button>
            </form>
        </div>
    );
}

const ChatMessageComponent = (props) => {
    return (
        <div className='chat-message-container'>
            <p style={{flexGrow:1}}><strong>{`${props.name} | ${props.message}`}</strong></p>
            <p>{`${props.time}`}</p>
        </div>
    );
}

export default ChatComponent;