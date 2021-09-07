import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Divider, Row, Col, Card } from "antd";
import MarketWindow from "../MarketWindow";
import { CartWindow } from "../CartWindow";
import { MessageWindow } from "../MessageWindow";

const Rooms = () => {
  let { path, url } = useRouteMatch();
  const rooms = [0, 1, 2, 3];
  const { id } = useParams();

  return (
    <>
      <Divider orientation="left">Rooms</Divider>

      <Row gutter={16}>
        <Col className="gutter-row" span={3} offset={3}>
          <NavLink to="/">Home</NavLink>
        </Col>
        {rooms.map((roomId) => (
          <Col className="gutter-row" span={3}>
            <NavLink to={`${url}/${roomId}`}>Room {roomId}</NavLink>
          </Col>
        ))}
      </Row>

      <Divider orientation="left">Messages</Divider>

      <Row gutter={20}>
        <Col span={6}>
          <Card title="chat board">
            <Switch>
              <Route path={path} exact>
                <div>Select Chat room</div>
              </Route>
              <Route path={`${path}/:id`}>
                <MessageWindow />
              </Route>
            </Switch>
          </Card>
        </Col>
        <Col span={10}>
          <MarketWindow />
        </Col>
        <Col span={8}>
          <CartWindow />
        </Col>
      </Row>
    </>
  );
};

export default Rooms;
