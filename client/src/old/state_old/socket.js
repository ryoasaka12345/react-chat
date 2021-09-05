import React from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "localhost:5000";
export const socket = socketIOClient(ENDPOINT);
export const SocketContext = React.createContext();
