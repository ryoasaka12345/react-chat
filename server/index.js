const http = require("http");
const express = require("express"); // helps manage sarver
const cors = require("cors"); // make the backend to the frontend per CORS.
const socketIo = require("socket.io");
const { create } = require("domain");
var mysql = require('mysql');
const { CONNREFUSED } = require("dns");


/* build server */
var server = http.createServer();


/* helps manage sarver */
// const app = express();
// app.use(cors());


/* mysql */
var con_sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "react_chat"
});

con_sql.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

const roomIDs = [1, 2, 3, 4]
// create a log for each room.
roomIDs.forEach((roomID) => {
    // create
    con_sql.query(`
            CREATE TABLE IF NOT EXISTS 
            chat_log_room${roomID}(name VARCHAR(255), mess VARCHAR(255))
            `,
        (err, result) => {
            if (err) throw err;
            console.log(`Table${roomID} created`);
        });

    // insert initial chatlog
    con_sql.query(`
            SELECT * FROM chat_log_room${roomID}
        `,
        (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                con_sql.query(`
                    INSERT INTO chat_log_room${roomID} (name, mess)
                    value ("master", "this is room ${roomID}")
                    `,
                    (err, result) => {
                        if (err) throw err;
                        console.log(`insert init log to room ${roomID}`);
                    }
                );
            }
        }
    );
});

/* websocket */
const io = socketIo(server, {
    cors: {
        origin: ["http://localhost:3001", "http://localhost:3002"],
        methods: ["GET", "POST"],
        credentials: true,
    },
});

let messages = {
    "1": [],
    "2": [],
    "3": [],
    "4": []
};

io.on("connection", socket => {
    require("./socket.js")(io, socket, messages, con_sql);
});


/* launch server  */
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
