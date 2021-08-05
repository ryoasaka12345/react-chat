import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "localhost:4000";
const socket = socketIOClient(ENDPOINT);

function App() {
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect");
  }, []);

  socket.on("hello", (data) => {
    console.log(data);
  });

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
