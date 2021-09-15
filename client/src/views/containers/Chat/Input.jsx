import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Input = () => {
  let { id } = useParams();
  const inputText = useRef();
  const socket = useSelector((state) => state.socket.util.socket);

  const submitHandler = () => {
    const sendItem = {
      roomId: id,
      message: {
        author: "user 2",
        content: inputText.current.value,
      },
    };
    // socket.emit("chat", "message", sendItem);
  };

  return (
    <>
      <input ref={inputText} type="text"></input>
      <button onClick={submitHandler}>submit</button>
    </>
  );
};

export default Input;
