import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "localhost:4000";

function App() {
  useEffect( () => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI");
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
