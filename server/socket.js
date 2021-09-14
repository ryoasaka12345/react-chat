const socketHandler = (io, socket, messages, con_sql) => {
  console.log(`${socket.id} is connected`);

  const addMessage = (messages, message, roomId) => {
    messages[roomId] = [...messages[roomId], message];
    con_sql.query(
      `
            INSERT INTO chat_log_room${roomId} (author, content)
            value ("${message.author}", "${message.content}")
            `,
      (err, result) => {
        if (err) throw err;
      }
    );
    return messages;
  };

  socket.on("chat", (type, body) => {
    switch (type) {
      case "join":
        var roomId = body;
        socket.join(roomId);
        socket.emit("chat", (type = "messages"), (body = messages[roomId]));
        console.log("user join room", roomId);
        return;
      case "leave":
        var roomId = body;
        socket.leave(roomId);
        console.log("user leave room", roomId);
        return;
      case "message":
        var roomId = !!body.roomId ? body.roomId : null;
        var message = !!body.message ? body.message : null;
        if (!!roomId && !!message) {
          messages = addMessage(messages, message, roomId);
          io.to(roomId).emit("chat", (type = "message"), (body = message));
          console.log("send:", message);
        }
        return;
      default:
        return;
    }
  });
};

module.exports = socketHandler;
