import { useParams } from "react-router-dom";
import { List, Comment } from "antd";
import { useSelector } from "react-redux";

const Messages = () => {
  let { id } = useParams();

  const messages = useSelector((state) => state.chat.util[id]);
  console.log(messages);

  return (
    <List
      className="comment-list"
      itemLayout="horizonal"
      dataSource={messages}
      renderItem={(message) => (
        <li>
          <Comment author={message.author} content={message.content} />{" "}
        </li>
      )}
    />
  );
};

export default Messages;
