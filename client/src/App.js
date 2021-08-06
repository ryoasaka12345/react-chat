import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "localhost:4000";
const socket = socketIOClient(ENDPOINT);

function App() {
  const [receivedMessage, setReceivedMessage] = useState([]);
  const [messageLog, setMessageLog] = useState();
  const [roomName, setRoomName] = useState();
  const messageInput = useRef();


  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect");
    setMessageLog(receivedMessage.map((message) => (
      <li>
        {message.name} : {message.mess}
      </li>
    )));
  }, [receivedMessage]);

  /* 
    socket
  */
  socket.on("hello", (data) => {
    console.log(data);
    setRoomName(data);
  });

  socket.on("messages", (messages) => {
    console.log(messages);
    setReceivedMessage(messages);
  });

  /* 
    functions
  */
  const submitHandler = (e) => {
    const sendItem = {
      name: "user",
      mess: messageInput.current.value
    }
    console.log("send:", sendItem);
    socket.emit("message", sendItem);
  }

  const consoleInput = () => {
    console.log(messageInput.current.value);
  }

  return (
    <div className="App">
      <h1>{roomName}</h1>
      <div>{messageLog}</div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={messageInput} onChange={consoleInput}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
