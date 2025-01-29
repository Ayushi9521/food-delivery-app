import { useState } from "react";
import axios from "axios";
import "./Order.css";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Order = ({ url }) => {
  const [orderList, setOrderList] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrderList(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchOrders();
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="order add">
      <h3>Order Page</h3>
      {orderList.map((order, index) => (
        <div className="order-item" key={index}>
          <span className="material-symbols-outlined icon">box</span>
          <div>
            <p className="order-item-food">
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + "X" + item.quantity;
                } else {
                  return item.name + "X" + item.quantity + ",";
                }
              })}
            </p>
            <p className="order-item-name">
              {order.address.firstName + " " + order.address.lastName}
            </p>
            <div className="order-item-address">
              <p>{order.address.street + ","}</p>
              <p>
                {order.address.city +
                  "," +
                  order.address.state +
                  "," +
                  order.address.country +
                  "," +
                  order.address.zipcode}
              </p>
            </div>
            <p className="order-item-phone">{order.address.phone}</p>
          </div>
          <p>Items: {order.items.length}</p>
          <p>${order.amount}</p>
          <select
            onChange={(event) => statusHandler(event, order._id)}
            value={order.status}
          >
            <option value="Food Processing">Food Processsing</option>
            <option value="Out For Delivery">Out For Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Order;
