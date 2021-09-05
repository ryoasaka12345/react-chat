import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import "./shop.css";
import { NavLink } from "react-router-dom";

export default function ShopContent() {
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

  console.log(items[0]);

  return (
    <>
      <Row gutter={10}>
        {items.map((item) => (
          <Col>
            <Card title={item.name} style={{ width: 150 }}>
              <p>price: {item.price}</p>
              <p>count: {item.count}</p>
              <Button onClick={onClickHandler} id={item.no}>
                Add to cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Col>
        <Card title="my cart" style={{ width: 150 }}>
          <p>sum: {cart.sum}</p>
          <p>count: {cart.count}</p>
        </Card>
      </Col>
      <div>
        <NavLink to="/">Back to home</NavLink>
      </div>
    </>
  );
}
