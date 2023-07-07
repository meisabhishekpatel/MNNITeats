import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById, updatePizza } from '../../actions/pizzaAction'
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
// import Success from '../Success';
import Error from '../Error'

export const EditPizza = () => {
    const [name, setname] = useState("")
    const [smallPrice, setsmallPrice] = useState()
    const [largePrice, setlargePrice] = useState()
    const [mediumPrice, setmediumPrice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [store, setstore] = useState('')
    const [category, setcategory] = useState('')
    const { pizzaId } = useParams();
    const dispatch = useDispatch();
    const getPizzaByState = useSelector(state => state.getPizzaByIdReducer)
    const { pizza } = getPizzaByState;
    const updatePizzaState = useSelector(state => state.updatePizzaByIdReducer);
    const { updateloading, updateerror } = updatePizzaState;
    useEffect(() => {
        if (pizza) {
            if (pizza._id === pizzaId) {
                setname(pizza.name);
                setdescription(pizza.description);
                setstore(pizza.store);
                setcategory(pizza.category);
                setimage(pizza.image);
                setsmallPrice(pizza.prices[0]["small"]);
                setmediumPrice(pizza.prices[0]["medium"]);
                setlargePrice(pizza.prices[0]["large"]);
            }
            else
                dispatch(getPizzaById(pizzaId))
        }
        else {
            dispatch(getPizzaById(pizzaId))
        }
        // eslint-disable-next-line
    }, [pizza, dispatch])
    const submitForm = (e) => {
        e.preventDefault();
        const updatedpizza = {
            _id: pizzaId,
            name, image, description, category, store,
            prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }
        dispatch(updatePizza(updatedpizza));
    };
    return (
        <>
            {updateloading && (<Loader />)}
            {updateerror && (<Error error="add new item error" />)}
            {/* {success && (<Success success="item added" />)} */}
            <Form onSubmit={submitForm} className="bg-light p-4">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                            value={name}
                            onChange={e => setname(e.target.value)}
                            placeholder="Enter Name" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Small Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={smallPrice}
                                onChange={e => setsmallPrice(e.target.value)}
                                placeholder="Enter Small Price" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Medium Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={mediumPrice}
                                onChange={e => setmediumPrice(e.target.value)}
                                placeholder="Enter Medium Price" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Large Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={largePrice}
                                onChange={e => setlargePrice(e.target.value)}
                                placeholder="Enter Large Price" />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            value={image}
                            onChange={e => setimage(e.target.value)}
                            placeholder="Add image URL" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        onChange={e => setdescription(e.target.value)}
                        placeholder="Enter Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        value={store}
                        onChange={e => setstore(e.target.value)}
                        placeholder="Enter Store Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        value={category}
                        onChange={e => setcategory(e.target.value)}
                        placeholder="Enter Category" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Item
                </Button>
            </Form>
        </>
    )
}
