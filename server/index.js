const http = require("http");
const express = require("express"); // helps manage sarver
const cors = require("cors"); // make the backend to the frontend per CORS.
const socketIo = require("socket.io");

// useStates
let messages = [
    { name: "master", mess: "Welcome to Asaka's chat room" },
    { name: "master", mess: "what will you say?"},
    { name: "master", mess: "who are you?"}
];

// build server
var server = http.createServer();

// app helps manage sarver
const app = express();
app.use(cors());

//make websocket
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    },
});

// connection
io.on("connection", socket => {
    socket.emit("hello", "Wellcome to Asaka's chat room");
    socket.emit("messages", messages);

    // message log
    socket.on("message", message => {
        console.log(message);
        // messages = [message];
        // socket.emit("message", messages);
        messages = [...messages, message];
        socket.emit("messages", messages);
        console.log("send message");
    });
});


// launch server 
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
