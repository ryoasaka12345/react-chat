import { Card, Divider, Table } from "antd";
import { useSelector } from "react-redux";

const CartContents = () => {
  const summary = useSelector((state) => state.inventory.util.inventorySummary);
  const items = useSelector((state) => state.inventory.util.items);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Total", dataIndex: "total", key: "total" },
  ];

  const dataSource = [];
  Object.keys(items).forEach((key, index) => {
    dataSource.push({
      name: items[key].name,
      price: items[key].price,
      total: items[key].total,
    });
  });

  return (
    <Card title="my inventory">
      <li>barance: {summary.barance}</li>
      <li>quantity: {summary.quantity}</li>
      <li>totalCap: {summary.totalCap}</li>
      {!Object.keys(items).length ? (
        <Divider>no items</Divider>
      ) : (
        <>
          <Divider>items</Divider>
          <Table dataSource={dataSource} columns={columns} size="small" />
        </>
      )}
    </Card>
  );
};

export default CartContents;
