import { useContext, useRef, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { SocketContext } from "../../../contexts/socket";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row, Button } from "antd";

function ChatContents() {
  const socket = useContext(SocketContext);
  const inputText = useRef();
  const [receivedMessage, setReceivedMessage] = useState();
  let { id } = useParams();

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const cart = useSelector((state) => state.cart);
  const handleAddToCart = (item) => {
    dispatch({ type: `addToCart/${item}` });
  };
  const onClickHandler = (e) => {
    const itemNo = e.currentTarget.id;
    handleAddToCart(itemNo);
  };

  /* 
    Handlers
    */
  const submitHandler = () => {
    const sendItem = {
      name: "user",
      mess: inputText.current.value,
    };
    socket.emit("message", sendItem, id);
  };

  const leaveHandler = () => {
    console.log("leave Room", id);
    socket.emit("leave", id);
  };

  /* 
    Socket Handler
    */
  socket.on("messages", (messages) => {
    setReceivedMessage(
      messages.map((message) => (
        <p>
          {message.name} :{message.mess}
        </p>
      ))
    );
  });

  /* 
        join room
    */
  useEffect(() => {
    socket.emit("join", id);
    socket.emit("hello", id);
  }, []);

  return (
    <div>
      <Row gutter={10}>
        <Col>
          <Card title={items[id].name} style={{ width: 150 }}>
            <p>price: {items[id].price}</p>
            <p>count: {items[id].count}</p>
            <Button onClick={onClickHandler} id={items[id].no}>
              Add to cart
            </Button>
          </Card>
        </Col>
        <Col>
          <Card title="my cart" style={{ width: 150 }}>
            <p>sum: {cart.sum}</p>
            <p>count: {cart.count}</p>
          </Card>
        </Col>
        <Col>
          <div>
            <h2>Room {items[id].name}</h2>
            <div>{receivedMessage}</div>
            <input ref={inputText} type="text"></input>
            <button onClick={submitHandler}>submit</button>
          </div>
          <div>
            <NavLink to="/">Back to home</NavLink>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ChatContents;
