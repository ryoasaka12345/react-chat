import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, Comment } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chatOperations } from "../../../state/ducks/chat";

const Messages = () => {
  let { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.util);
  const socket = useSelector((state) => state.socket.util.socket);

  useEffect(() => {
    dispatch(chatOperations.initMessages());
    socket.emit("chat", "leave", currentId);
    socket.emit("chat", "join", id);
    setCurrentId(id);
  }, [id]);

  // It would be needed to update some state in the background when receive socket.on().
  // Thus, in the future, I should to consolidate processings regarding socket into a state or somewhere else.
  socket.on("chat", (type, body) => {
    switch (type) {
      case "message":
        console.log("get message room Id:", id);
        var message = body;
        dispatch(chatOperations.addMessage(message));
        return;
      case "messages":
        var messages = body;
        dispatch(chatOperations.addMessages(messages));
        return;
      default:
        return;
    }
  });

  return (
    <List
      className="comment-list"
      itemLayout="horizonal"
      dataSource={messages}
      renderItem={(message) => (
        <li>
          <Comment author={message.author} content={message.content} />
        </li>
      )}
    />
  );
};

export default Messages;
