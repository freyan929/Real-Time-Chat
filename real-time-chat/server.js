const cors = require('cors');
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
    console.log('someone connected');

    io.on('disconnect', () => {
        console.log('someone disconnected');
    });
});

http.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`);
});