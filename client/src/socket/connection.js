import { io } from "socket.io-client";
import { chatActions } from "./terminals";
import { useDispatch } from "react-redux";

const SocketConnection = () => {
  const ENDPOINT = "localhost:5000";
  const socket = io(ENDPOINT);
  const dispatch = useDispatch();

  socket.on("messages", (receive) => {
    chatActions(dispatch, receive);
  });
  return <></>;
};

export default SocketConnection;
