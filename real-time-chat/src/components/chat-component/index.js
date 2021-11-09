import { useEffect, useState } from 'react';
import './style.css';

import io from 'socket.io-client';

const ChatComponent = (props) => {
    const [messages, setMessages] = useState([]);
    const [chatMsg, setChatMsg] = useState('');
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
                    messages.map((message:{...}, index: number) => {
                        return(
                            <ChatMessageComponent key={message.name + index} name={message.name} message={message.msg} time={message.time}></ChatMessageComponent>
                        );
                    })
                }

                <div className='line-with-text-container'>
                    <p className='line-with-text'><span>Oct 4, 2021</span></p>
                </div>
            </div>

            <form className='input-container' onSubmit={(e) => {
                e.preventDefault();

                const data = {
                    name: socket.id,
                    msg: chatMsg,
                    time: new Date()
                };

                setChatMsg('');

                socket.emit('message_sent', data);
            }}>
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
            <p><strong>{`${props.name} | ${props.message}`}</strong></p>
            <p className='float-right'>{`${props.time}`}</p>
        </div>
    );
}

export default ChatComponent;