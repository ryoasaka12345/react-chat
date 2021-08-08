const http = require("http");
const express = require("express"); // helps manage sarver
const cors = require("cors"); // make the backend to the frontend per CORS.
const socketIo = require("socket.io");
const { create } = require("domain");

/* build server */
var server = http.createServer();

/* helps manage sarver */
const app = express();
app.use(cors());

/* websocket */
const io = socketIo(server, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "POST"],
        credentials: true,
    },
});

let messages = {
    "1": [{ name: "master", mess: "This is room 1" }],
    "2": [{ name: "master", mess: "This is room 2" }],
    "3": [{ name: "master", mess: "This is room 3" }],
    "4": [{ name: "master", mess: "This is room 4" }]
};

io.on("connection", socket => {
    require("./socket.js")(io, socket, messages);
});

/* launch server  */
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
