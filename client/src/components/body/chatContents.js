import { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { SocketContext } from "../../contexts/socket.js";

function ChatContents() {
    const socket = useContext(SocketContext);
    const inputText = useRef();
    const [receivedMessage, setReceivedMessage] = useState();

    socket.on("messages", (messages) => {
        setReceivedMessage(messages.map((message) => (
            <p>
                {message.name} :
                {message.mess}
            </p>
        )));
    });

const submitHandler = (e) => {
    const sendItem = {
        name: "user",
        mess: inputText.current.value
    }
    socket.emit("message", sendItem);
}

return (
    <div>
        <div>
            <h2>test</h2>
            <div>{receivedMessage}</div>
            <input ref={inputText} type="text"></input>
            <button onClick={submitHandler}>submit</button>
        </div>
        <div>
            <NavLink to="/">Back to home</NavLink>
        </div>
    </div>
);
}

export default ChatContents;
