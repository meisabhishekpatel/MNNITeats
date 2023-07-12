import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { addPizza } from '../../actions/pizzaAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import Success from '../Success';
import Error from '../Error'
const AddNewPizza = () => {
  const [name, setname] = useState('')
  const [smallPrice, setsmallPrice] = useState()
  const [largePrice, setlargePrice] = useState()
  const [mediumPrice, setmediumPrice] = useState()
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [store, setstore] = useState('')
  const [category, setcategory] = useState('')
  const addPizzaState = useSelector(state => state.addPizzaReducer)
  const { loading, error, success } = addPizzaState;
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name, image, description, category, store,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice
      }
    }
    dispatch(addPizza(pizza));
  };
  return (
    <>
      {loading && (<Loader />)}
      {error && (<Error error="add new item error" />)}
      {success && (<Success success="item added" />)}
      <Form onSubmit={submitForm}  >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail" >
            <Form.Label style={{color: "#FFC529"}}>Name</Form.Label>
            <Form.Control style={{backgroundColor: "black", color:"#FFC529"}} type="text"
              value={name}
              onChange={e => setname(e.target.value)}
              placeholder="Enter Name" />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label style={{color: "#FFC529"}}>Small Price</Form.Label>
              <Form.Control style={{backgroundColor: "black", color:"#FFC529"}}
                type="text"
                value={smallPrice}
                onChange={e => setsmallPrice(e.target.value)}
                placeholder="Enter Small Price" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label style={{color: "#FFC529"}}>Medium Price</Form.Label>
              <Form.Control style={{backgroundColor: "black", color:"#FFC529"}}
                type="text"
                value={mediumPrice}
                onChange={e => setmediumPrice(e.target.value)}
                placeholder="Enter Medium Price" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label style={{color: "#FFC529"}}>Large Price</Form.Label>
              <Form.Control style={{backgroundColor: "black", color:"#FFC529"}}
                type="text"
                value={largePrice}
                onChange={e => setlargePrice(e.target.value)}
                placeholder="Enter Large Price" />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label style={{color: "#FFC529"}}>Image</Form.Label>
            <Form.Control style={{backgroundColor: "black", color:"#FFC529"}}
              type="text"
              value={image}
              onChange={e => setimage(e.target.value)}
              placeholder="Add image URL" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={{color: "#FFC529"}}>Description</Form.Label>
          <Form.Control style={{backgroundColor: "black", color:"#FFC529"}}
            type="text"
            value={description}
            onChange={e => setdescription(e.target.value)}
            placeholder="Enter Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={{color: "#FFC529"}}>Store</Form.Label>
          <Form.Control style={{backgroundColor: "black", color:"#FFC529"}}
            type="text"
            value={store}
            onChange={e => setstore(e.target.value)}
            placeholder="Enter store name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label style={{color: "#FFC529"}}>Category</Form.Label>
          <Form.Control style={{backgroundColor: "black", color:"#FFC529"}}
            type="text"
            value={category}
            onChange={e => setcategory(e.target.value)}
            placeholder="Enter Category" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{color: "#FFC529", backgroundColor: "black"}}>
          Add New
        </Button>
      </Form>
    </>
  )
};

export default AddNewPizza;
