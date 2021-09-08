const socketHandler = (io, socket, messages, cons_sql) => {
  console.log(`${socket.id} is connected`);
  io.emit("hello", messages);
};

module.exports = socketHandler;
