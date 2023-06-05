// import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap/esm';

const Pizza = ({ pizza }) => {
    const [variant, setVariant] = useState('small');
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div>
            <Card style={{ width: '18rem', marginTop: '30px' }}>
                <Card.Img 
                variant="top" 
                src={pizza.image}
                style={{cursor:"pointer"}} 
                onClick={handleShow}/>
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <h6>Variant</h6>
                                <select value={variant} onChange={e => setVariant(e.target.value)}>
                                    {pizza.variants.map((variant) => (
                                        <option >{variant}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col md={6}>
                                <h6>Quantity</h6>
                                <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option  > {i + 1}</option>
                                    ))}
                                </select>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Row>
                        <Col md={6}>
                            <Button className="bg-white text-black">Price: {pizza.prices[0][variant] * quantity}</Button>
                        </Col>

                        <Col md={6}>
                            <Button className="bg-warning text-white">Add to Cart</Button>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

            {/* modal */}
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <Card.Img 
                variant="top" 
                src={pizza.image}/>
            </div>
            <div>
                <h5>Description:</h5>
                <h6>{pizza.description}</h6>
            </div>
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default Pizza;