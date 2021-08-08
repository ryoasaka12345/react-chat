import { useContext, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { SocketContext } from "../../contexts/socket.js";

function ChatContents() {
    const socket = useContext(SocketContext);
    const inputText = useRef();
    const [receivedMessage, setReceivedMessage] = useState();
    let { id } = useParams();
    
    socket.on("messages", (messages) => {
        setReceivedMessage(messages.map((message) => (
            <p>
                {message.name} :
                {message.mess}
            </p>
        )));
    });

    socket.emit("join", id);

    const submitHandler = () => {
        const sendItem = {
            name: "user",
            mess: inputText.current.value
        }
        socket.emit("message", sendItem, id);
    }

    const leaveHandler = () => {
        console.log("leave Room", id);
        socket.emit("leave", id);
    }

    return (
        <div>
            <div>
                <h2>Room {id}</h2>
                <div>{receivedMessage}</div>
                <input ref={inputText} type="text"></input>
                <button onClick={submitHandler}>submit</button>
            </div>
            <div>
                <NavLink to="/" onClick={leaveHandler}>Back to home</NavLink>
            </div>
        </div>
    );
}

export default ChatContents;
