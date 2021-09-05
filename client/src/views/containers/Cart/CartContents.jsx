import { Card } from "antd";
import { useSelector } from "react-redux"; 

const CartContents = () => {

  const cart = useSelector((state)=>state.inventory.util)

  return (
    <Card title="my cart">
      <li>quantity: {cart.quantity}</li>
      <li>Total: {cart.totalPrice}</li>
    </Card>
  );
};

export default CartContents;