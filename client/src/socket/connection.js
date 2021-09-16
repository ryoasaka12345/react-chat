import io from "socket.io-client";
import * as harbor from "./harbor";

const host = "http://localhost:5000";

export default class SocketConnection {
  socket;
  dispatch;

  constructor(dispatch) {
    this.dispatch = dispatch;
    console.log("Constructed SocketConnection");
  }

  test() {
    harbor.chat.receiver();
    harbor.chat.emitter(this.dispatch, this.socket, "CONNECTION_TEST");
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

  emit(type, event, body) {
    switch (type) {
      case "chat":
        harbor.chat.emitter(this.dispatch, this.socket, event, body);
        return;
      default:
        console.log("unspecific type");
        return;
    }
  }

  // emit(event, type, body) {
  //   return new Promise((resolve, reject) => {
  //     if (!this.socket) return reject("No socket connection.");

  //     return this.socket.emit(type, event, body, (response) => {
  //       if (response.error) {
  //         console.error(response.error);
  //         return reject(response.error);
  //       }
  //       return resolve();
  //     });
  //   });
  // }

  on(event, type, body) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");
      this.socket.on(type, event, body);
      resolve();
    });
  }
}
