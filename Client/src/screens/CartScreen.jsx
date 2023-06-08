import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FaMinusSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'
import { addToCart, deleteFromCart } from '../actions/cartAction'


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
                        <h1>My Cart</h1>
                        <Row>
                            {
                                cartItems.map((item) => (
                                    <>
                                        <Col md={7}>
                                            <h5>{item.name} [{item.variant}]</h5>
                                            <h6>
                                                {" "}
                                                Price : {item.quantity} X {item.prices[0][item.variant]} ={" "}{item.price}
                                            </h6>
                                            <h6>Quantity :&nbsp;

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
                                            <img alt={item.name} src={item.image} style={{ width: '150px', height: '80px' }} />
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
                        <h1>Payment</h1>
                        <h4>SubTotal:</h4>
                        <h4>RS {subTotal} </h4>
                        <Button>Checkout</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CartScreen
