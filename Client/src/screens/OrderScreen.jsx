import React, { useEffect } from 'react'
import { getUserOrders } from '../actions/orderAction'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "react-bootstrap"
import Loader from '../components/Loader'
import Error from '../components/Error'
import { ImFontSize } from 'react-icons/im'

const OrderScreen = () => {
  const orderState = useSelector(state => state.getUserOrdersReducer)
  const { loading, error, orders } = orderState
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch])
  return (
    <div>
      <h1 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive", fontWeight: "bold"}}>Your Orders</h1>
      {loading && (<Loader />)}
      {error && (<Error error="somethin went wrong" />)}
      {
        orders && orders.map(order => (
          <div className="container border-black p-4">
            <Row style={{marginTop: "20px"}}>
              <Col md={4}>
                {order.orderItems.map(item => (
                  <h6 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive", fontWeight: "bold"}} key={item.name}>{item.name}  ({item.variant}) * {item.quantity} = <p style={{ fontSize:"15px", textAlign: "center",  fontFamily: "cursive"}}>{item.price}</p></h6>
                ))}
              </Col>
              <Col md={4}>
                <h4 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive", fontWeight: "bold", paddingBottom:"10px"}}>ADDRESS</h4>
                <h6 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive"}}>STREET : <p style={{ fontSize:"15px", textAlign: "center",  fontFamily: "cursive"}}>{order.shippingAddress.street}</p></h6>
                <h6 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive"}}>CITY : <p style={{ fontSize:"15px", textAlign: "center",  fontFamily: "cursive"}}>{order.shippingAddress.city}</p></h6>
                <h6 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive"}}>PINCODE : <p style={{ fontSize:"15px", textAlign: "center",  fontFamily: "cursive"}}>{order.shippingAddress.pincode}</p></h6>
                <h6 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive"}}>COUNTRY : <p style={{ fontSize:"15px", textAlign: "center",  fontFamily: "cursive"}}>{order.shippingAddress.country}</p></h6>
              </Col>
              <Col md={4}>
                <h4 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive", fontWeight: "bold", paddingBottom:"10px"}}>ORDER INFO</h4>
                <h6 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive"}}>ORDER AMOUNT : <p style={{ fontSize:"15px", textAlign: "center",  fontFamily: "cursive"}}>{order.orderAmount}</p></h6>
                <h6 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive"}}>TRANSACTION ID : <p style={{ fontSize:"15px", textAlign: "center",  fontFamily: "cursive"}}>{order.transactionId}</p></h6>
                <h6 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive"}}>ORDER ID : <p style={{ fontSize:"15px", textAlign: "center",  fontFamily: "cursive"}}>{order._id}</p></h6>
              </Col>
            </Row>
          </div>
        ))
      }
    </div >
  )
}

export default OrderScreen
