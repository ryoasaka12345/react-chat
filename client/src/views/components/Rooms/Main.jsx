import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Divider, Row, Col, Card, Button } from "antd";
import MarketWindow from "../MarketWindow";
import { CartWindow } from "../CartWindow";
import { MessageWindow } from "../MessageWindow";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./Rooms.css";

const Rooms = () => {
  let { path, url } = useRouteMatch();
  const socket = useSelector((state) => state.socket.util);
  const rooms = [0, 1, 2, 3];

  useEffect(() => {
    socket
      .connect()
      .then(() => {
        console.log("sucess connect socket");
      })
      .catch(() => {
        console.log("failed connect socket");
      });
  }, [socket]);

  return (
    <>
      <Divider orientation="left">Rooms</Divider>

      <ul class="nav-bar">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        {rooms.map((roomId) => (
          <li>
            <NavLink class="nav-link" to={`${url}/${roomId}`}>
              Room {roomId}
            </NavLink>
          </li>
        ))}
      </ul>

      <Divider orientation="left">Messages</Divider>

      <Row gutter={20}>
        <Switch>
          <Route path={path} exact>
            <Col span={16}>
              <div>Select Chat room</div>
            </Col>
          </Route>
          <Route path={`${path}/:id`}>
            <Col span={6}>
              <Card title="chat borard">
                <MessageWindow />
              </Card>
            </Col>
            <Col span={10}>
              <MarketWindow />
            </Col>
          </Route>
        </Switch>
        <Col span={8}>
          <CartWindow />
        </Col>
      </Row>
    </>
  );
};

export default Rooms;
