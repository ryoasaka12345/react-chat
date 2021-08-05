const http = require("http");
const express = require("express"); // helps manage sarver
const cors = require("cors"); // make the backend to the frontend per CORS.
const socketIo = require("socket.io");

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

io.on("connection", (socket) => {
    console.log(`New client connected`);
});

// launch server 
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
