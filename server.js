const cors = require('cors')
const app = require('express')();

app.use(cors({
    origin: '*'
}));

const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
    }
});

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);

    socket.on('message_sent', messages => {
        console.log(`sending message from ${socket.id}`);
        io.emit('message_sent', messages);
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
    });
});

http.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`);
});

// create express variable and modify existing app variable
const express = require('express');

// import to get system path
const path = require('path');

// localhost
const host = '0.0.0.0';

// serve compiled html, css, and js as a result of running "npm run build" or "yarn build"
app.use(express.static(path.join(__dirname, 'build')));

// show react website if user visits "/" page
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'build')});
});