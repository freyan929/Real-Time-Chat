import './style.css';

const Home = () => {
    return (
        <div className="welcome-container">
            <div className="welcome-header">
                <h1>{'WELCOME'}</h1>
                <h3>{"LET'S GET CHATTING"}</h3>
            </div>

            <div className="buttons">
                <button className="button" onClick='text'>Create a New Chat</button>
            </div>

            <div className="search">
                <input type="text" placeholder="Find an Existing Chat.."></input>
            </div>
        </div>
    );
}

export default Home;