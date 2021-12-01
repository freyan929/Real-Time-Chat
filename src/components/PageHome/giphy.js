import {useState, useEffect} from 'react';
import "./CSS/Giphy.css";
const axios = require ('axios');

const PageA = () => {
    let [gif, setGif] = useState();
    let [creator, setCreator] = useState();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        let promise = await axios.get("http://api.giphy.com/v1/gifs/random?api_key=WlnxcmgY8XWDkp12QK7k6LZijAjwyVBW");
        setGif(promise.data.data.url);
        setCreator(promise.data.data.username);
        console.log(promise.data.data.url);
        console.log(promise.data.data.username);
        <iframe src="promise.data.data.url" width="500" height="400"></iframe>
    }

    return (
        <div className="makerfield">
            <div className="textField">
                <div id="gif">
                    "{gif}"
                </div>
                <div id="creator">
                    {creator}
                </div>
            </div>
            <button onClick={getData}>DON'T CLICK ME</button>

        </div>
    );
}