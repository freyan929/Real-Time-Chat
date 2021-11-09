const cors = require('cors')
const app = require('express')();

app.use(cors({
    origin: 'http://localhost:3000'
}));

const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
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