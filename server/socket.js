const socketHandler = (io, socket, messages) => {
    console.log(`${socket.id} is connected`);

    socket.on("join", (roomID) => {
        socket.join(roomID);
    });

    socket.on("hello", (roomID) => {
        message = { name: "master", mess: `hello ${socket.id} !` }
        messages[roomID] = [...messages[roomID], message];
        io.to(roomID).emit("messages", messages[roomID]);
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
