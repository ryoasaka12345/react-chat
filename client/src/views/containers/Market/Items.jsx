import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";
import { itemsOperations } from "../../../state/ducks/items";
import { useDispatch } from "react-redux";
import { inventoryOperations } from "../../../state/ducks/inventory";

const Items = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.util[id]);

  const buyItemHandler = (e) => {
    // console.log(e.currentTarget.value);
    dispatch(itemsOperations.sellItem(id, e.currentTarget.value));
    dispatch(inventoryOperations.addItem(items[e.currentTarget.value]));
  };

  return (
    <>
      <Row gutter={[20, 20]}>
        {items.map((item) => (
          <Col>
            <Card title={item.name} style={{ width: 150 }}>
              <p>price: {item.price}</p>
              <p>count: {item.count}</p>
              <Button value={item.id} onClick={buyItemHandler}>
                BUY
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Items;
