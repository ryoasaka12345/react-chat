const socketHandler = (io, socket, messages, cons_sql) => {
  console.log(`${socket.id} is connected`);

  socket.on("chat", (type, body) => {
    switch (type) {
      case "join":
        // roomId = body
        socket.join(body);
        socket.emit("chat", (type = "messages"), (body = messages[body]));
      case "leave":
        // roomId = body
        socket.leave(body);
    }
  });
};

module.exports = socketHandler;
