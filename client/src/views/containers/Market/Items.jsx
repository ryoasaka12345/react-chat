import { useSelector } from "react-redux";
import {Row, Col, Card} from "antd";

const Items = () => {
  const items = useSelector((state)=>state.items.util.list);
  
  return (
    <>
      <Row gutter={[20, 20]}>
        {items.map((item) => (
          <Col>
            <Card title={item.name} style={{ width: 150 }}>
              <p>price: {item.price}</p>
              <p>count: {item.count}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Items;
