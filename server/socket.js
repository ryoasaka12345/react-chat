const socketHandler = (io, socket) => {

    let messages = {
        "1": [{ name: "master", mess: "This is room 1" }],
        "2": [{ name: "master", mess: "This is room 2" }],
        "3": [{ name: "master", mess: "This is room 3" }],
        "4": [{ name: "master", mess: "This is room 4" }]
    };

    console.log(`${socket.id} is connected`);

    socket.on("join", (roomId) => {
        socket.join(roomId);
    });

    socket.on("hello", (roomId) => {
        message = { name: "master", mess: `hello ${socket.id} !` }
        messages[roomId] = [...messages[roomId], message];
        io.to(roomId).emit("messages", messages[roomId]);
    });

    socket.on("leave", (roomId) => {
        socket.leave(roomId);
        console.log("user disconnect room", roomId);
    });

    socket.on("message", (message, roomId) => {
        messages[roomId] = [...messages[roomId], message];
        io.to(roomId).emit("messages", messages[roomId]);
    });

}

module.exports = socketHandler;
