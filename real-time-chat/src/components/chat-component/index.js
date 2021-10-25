import './style.css';

const ChatComponent = () => {
    return (
        <div className='chat-container'>
            <div className='chat-header'>
                <h2>{'Chat <xxx>'}</h2>
            </div>

            <div className='chat-messages-container'>
                <ChatMessageComponent name={'A | xxxxx'}></ChatMessageComponent>
                <ChatMessageComponent name={'B | xx'}></ChatMessageComponent>
                <ChatMessageComponent name={'A | xxxxx'}></ChatMessageComponent>

                <div className='line-with-text-container'>
                    <p className='line-with-text'><span>Oct 4, 2021</span></p>
                </div>
            </div>

            <form className='input-container' onSubmit={(e) => {
                e.preventDefault(); console.log('send data to server');
            }}>
                <input placeholder='Type a new message...'></input>
                <button><strong>{'>>'}</strong></button>
            </form>
        </div>
    );
}

const ChatMessageComponent = (props) => {
    return (
        <div className='chat-message-container'>
            <p className='username'><strong>{props.name}</strong></p>
            <p>{'(time)'}</p>
        </div>
    );
}

export default ChatComponent;
