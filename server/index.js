const http = require("http");
const express = require("express");
const cors = require("cors");
const coketIo = require("socket.io");

var server = http.createServer();

const app = express();
app.use(cors());

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
