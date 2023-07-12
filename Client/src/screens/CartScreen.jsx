import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FaMinusSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'
import { addToCart, deleteFromCart } from '../actions/cartAction'
import Checkout from '../components/Checkout'


const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 style={{ textAlign: "center",  fontFamily: "cursive",  paddingBottom:"10px"}}>My Cart</h1>
                        <Row>
                            {
                                cartItems.map((item) => (
                                    <>
                                        <Col md={7}>
                                            <h5 style={{ textAlign: "center",  fontFamily: "cursive",  paddingBottom:"10px"}}>{item.name} ({item.variant})</h5>
                                            <h6 style={{ textAlign: "center",  fontFamily: "cursive",  paddingBottom:"10px"}}>
                                                {" "}
                                                Price : {item.quantity} X {item.prices[0][item.variant]} ={" "}{item.price}
                                            </h6>
                                            <h6 style={{ textAlign: "center",  fontFamily: "cursive",  paddingBottom:"10px"}}>Quantity :&nbsp;

                                                <FaMinusSquare
                                                    className="text-danger"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.variant)) }}
                                                />&nbsp;

                                                {item.quantity}&nbsp;
                                                <FaPlusSquare
                                                    className="text-success"
                                                    tyle={{ cursor: "pointer" }}
                                                    onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.variant)) }}
                                                />
                                            </h6>

                                        </Col>
                                        <Col md={5}>
                                            <img alt={item.name} src={item.image} style={{ width: '150px', height: '80px',border:"solid 2px #FFC529" }} />
                                            <FaTrash className="text-danger"
                                                style={{ cursor: "pointer", marginLeft: "20px" }}
                                                onClick={() => {
                                                    dispatch(deleteFromCart(item))
                                                }} />
                                        </Col>

                                        <hr />
                                    </>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ textAlign: "center",  fontFamily: "cursive",  paddingBottom:"10px"}}>Payment</h1>
                        <h4 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive", paddingBottom:"10px"}}>SubTotal : </h4>
                        <p style={{ textAlign: "center",  fontFamily: "cursive",  paddingBottom:"10px"}}>RS {subTotal} </p>
                        <Checkout subTotal={subTotal}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CartScreen
