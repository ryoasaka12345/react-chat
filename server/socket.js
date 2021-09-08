const socketHandler = (io, socket, messages, cons_sql) => {
  console.log(`${socket.id} is connected`);
  io.emit("messages", {messages: messages});
};

module.exports = socketHandler;
