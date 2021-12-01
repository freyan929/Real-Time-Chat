import './images/nyc.jpg';
import './images/birthday.jpg';
import './index.css';

const ChatSearch = () => {
    return (
        <div className="parent-container">
            <div class="container">
                <img src="./images/nyc.jpg" alt="ny"/>
                <div class="centered">NYC Trippers</div>
            </div>
            <div class="container1">
                <img src="./images/birthday.jpg" alt="bday"/>
                <div class="centered">Leia's Surprise Party</div>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Search for an Existing Chat.."></input>
            </div>
        </div>
    );
}

export default ChatSearch