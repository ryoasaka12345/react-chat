import io from "socket.io-client";
import * as harbor from "./harbor";

const host = "http://localhost:5000";
// const socketPath = "/api/socket.io";

export default class SocketConnection {
  socket;

  constructor() {
    console.log("Constructed SocketConnection");
  }

  test() {
    harbor.chat.receiver();
    harbor.chat.emitter();
  }

  connect() {
    this.socket = io.connect(host);
    return new Promise((resolve, reject) => {
      this.socket.on("connect", () => resolve());
      this.socket.on("connect_error", (error) => reject(error));
    });
  }

  disconnect() {
    return new Promise((resolve) => {
      this.socket.disconnet(() => {
        this.socket = null;
        resolve();
      });
    });
  }

  emit(event, type, body) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");

      return this.socket.emit(type, event, body, (response) => {
        if (response.error) {
          console.error(response.error);
          return reject(response.error);
        }
        return resolve();
      });
    });
  }

  on(event, type, body) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");
      this.socket.on(type, event, body);
      resolve();
    });
  }
}
