const socketHandler = (io, socket, messages, con_sql) => {
    console.log(`${socket.id} is connected`);

    socket.on("join", (roomID) => {
        socket.join(roomID);
    });

    socket.on("hello", (roomID) => {
        message = { name: "master", mess: `hello ${socket.id} !` }
        messages[roomID] = [...messages[roomID], message];
        io.to(roomID).emit("messages", messages[roomID]);

        con_sql.query(
            `SELECT * FROM chat_log_room${roomID}`,
            (err, result, fields) => {
                if (err) throw err;
                result.forEach((elem) => {
                    console.log(`${elem.name}: ${elem.message}`);
                })
            });
    });

    socket.on("leave", (roomID) => {
        socket.leave(roomID);
        console.log("user disconnect room", roomID);
    });

    socket.on("message", (message, roomID) => {
        messages[roomID] = [...messages[roomID], message];
        io.to(roomID).emit("messages", messages[roomID]);
    });

}

module.exports = socketHandler;
