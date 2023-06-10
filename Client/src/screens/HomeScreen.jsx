import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'
import Pizza from '../components/Pizza.jsx';
import { getAllPizzas } from '../actions/pizzaAction.js';
import Loader from '../components/Loader.jsx';
import Error from '../components/Error.jsx';

function HomeScreen() {
    const dispatch = useDispatch();
    const pizzastate = useSelector(state => state.getAllPizzaReducer)
    const { loading, pizzas, error } = pizzastate;
    useEffect(() => { dispatch(getAllPizzas()) }, [dispatch])
    return (
        <div>
            <Container>
                {
                    loading ? (<Loader />)
                        : error ? (<Error>Error while fetching pizzas</Error>)
                        :
                         
                            (< Row >
                                {
                                    pizzas.map(pizza => (
                                        <Col md={4} >
                                            <Pizza pizza={pizza} />
                                        </Col>
                                    ))
                                }
                            </Row>)
                }
            </Container>
        </div>
    )
}

export default HomeScreen