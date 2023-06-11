import React, { useEffect } from 'react'
import { getUserOrders } from '../actions/orderAction'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "react-bootstrap"
import Loader from '../components/Loader'
import Error from '../components/Error'

const OrderScreen = () => {
  const orderState = useSelector(state => state.getUserOrdersReducer)
  const { loading, error, orders } = orderState
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch])
  return (
    <div>
      <h1>Your Orders</h1>
      {loading && (<Loader />)}
      {error && (<Error error="somethin went wrong" />)}
      {
        orders && orders.map(order => (
          <div className="container border p-4 bg-light">
            <Row>
              <Col md={4}>
                {order.orderItems.map(item => (
                  <h6 key={item.name}>{item.name}[{item.variant}]*{item.quantity}={item.price}</h6>
                ))}
              </Col>
              <Col md={4}>
                <h4>Address</h4>
                <h6>Street:{order.shippingAddress.street}</h6>
                <h6>City:{order.shippingAddress.city}</h6>
                <h6>PinoCode:{order.shippingAddress.pincode}</h6>
                <h6>Country:{order.shippingAddress.country}</h6>
              </Col>
              <Col md={4}>
                <h4>Order Info</h4>
                <h6>Order Amount:{order.orderAmount}</h6>
                <h6>Transaction Id:{order.transactionId}</h6>
                <h6>Order Id:{order._id}</h6>
              </Col>
            </Row>
          </div>
        ))
      }
    </div >
  )
}

export default OrderScreen
