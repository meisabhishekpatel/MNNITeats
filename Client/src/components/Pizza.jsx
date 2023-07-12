// import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap/esm';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';

const Pizza = ({ pizza }) => {
    const [variant, setVariant] = useState('small');
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch(addToCart(pizza, quantity, variant))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card style={{ width: '18rem', marginTop: '30px', border: "solid #FFC529"}}>
                <Card.Img style={{cursor: "pointer"}}
                    variant="top"
                    src={pizza.image}
                    onClick={handleShow} />
                <Card.Body>
                    <Card.Title style={{ color: "#FFC529", textAlign: "center", paddingBottom: "5px", fontSize: "20px", fontFamily: "cursive", fontWeight: "bold"}}>{pizza.name}</Card.Title>
                    <Card.Text>
                        <Row style={{ color: "#FFC529", textAlign: "center"}}>
                            <Col md={4}>
                                <h6 style={{ color: "#FFC529", textAlign: "center", fontSize: "16px", fontFamily: "cursive", fontWeight: "bold"}}>Variant</h6>
                                <select value={variant} onChange={e => setVariant(e.target.value)} style={{ backgroundColor: "#FFC529", border: "solid 1px" }} >
                                    {pizza.variants.map((variant) => (
                                        <option style={{ backgroundColor: "#FFC529", textAlign: "center", fontFamily: "cursive" }}>{variant}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col md={4}>
                                <h6 style={{ color: "#FFC529", textAlign: "center", fontSize: "16px", fontFamily: "cursive", fontWeight: "bold"}}>Amount</h6>
                                <select value={quantity} onChange={e => setQuantity(e.target.value)} style={{ backgroundColor: "#FFC529", border: "solid 1px" }} >
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option style={{ backgroundColor: "#FFC529" }}> {i + 1}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col md={4} >
                                <h6 style={{ color: "#FFC529", textAlign: "center", fontSize: "16px", fontFamily: "cursive", fontWeight: "bold", alignItems: "center"}}>Store</h6>
                                <Button className="bg-warning text-black" style={{ border: "solid 1px" }}>{pizza.store}</Button>
                            </Col>
                            
                        </Row>
                    </Card.Text>
                    <Row>
                    
                            
                            <Col md={6}>
                            <Button className="bg-warning text-black" style={{ border: "solid 1px"}}>Price: {pizza.prices[0][variant] * quantity}</Button>
                        </Col>

                        <Col md={6}>
                            <Button style={{ border: "solid 1px"}}
                                onClick={addToCartHandler}
                                className="bg-warning text-black">Add</Button>
                        </Col>
                            
                        
                    </Row>

                </Card.Body>
            </Card>

            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header  closeButton>
                    <Modal.Title style={{ color: "#FFC529", fontFamily: "cursive"}}>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Card.Img 
                            variant="top"
                            src={pizza.image} />
                    </div>
                    <div>
                        <h5 style={{ color: "#FFC529",   fontFamily: "cursive"}}>Description:</h5>
                        <h6>{pizza.description}</h6>
                    </div>
                    <div>
                        <h5 style={{ color: "#FFC529",  fontFamily: "cursive"}}>Store: {pizza.store}</h5>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Pizza;