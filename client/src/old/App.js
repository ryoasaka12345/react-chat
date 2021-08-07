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
  const messageInputRef = useRef();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect");
    setMessageLog(receivedMessage.map((message) => (
      <p>
        {message.name} : {message.mess}
      </p>
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
      mess: messageInputRef.current.value
    }
    console.log("send:", sendItem);
    socket.emit("message", sendItem);
  }

  return (
    <div className="App">
      <h1>{roomName}</h1>
      <div>{messageLog}</div>
      <input type="text" ref={messageInputRef}></input>
      <button type="submit" onClick={submitHandler}>submit</button>
    </div>
  );
}

export default App;
