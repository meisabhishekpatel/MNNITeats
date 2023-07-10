import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from '../../actions/orderAction'
import Loader from './../Loader';
import Error from './../Error';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const OrderList = () => {
  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrdersState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
    <div>
      <h1>Order Lists</h1>
      {loading && <Loader />}
      {error && <Error error="Admin Order req fail" />}
      <Table striped bordered hover>
        <thead>
          <tr style={{color: "#FFC529"}}>
            <th>Order Id</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td style={{color: "#FFC529"}}>{order._id}</td>
                <td style={{color: "#FFC529"}}>{order.email}</td>
                <td style={{color: "#FFC529"}}>{order.transactionId}</td>
                <td style={{color: "#FFC529"}}>Rs {order.orderAmount}/-</td>
                <td style={{color: "#FFC529"}}>{order.createdAt.substring(0, 10)}</td>
                <td style={{color: "#FFC529"}}>
                  {" "}
                  {order.isDelivered ? (
                    <h6 className="text-success">Delivered</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};



export default OrderList;
