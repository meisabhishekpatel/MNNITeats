import React, { useEffect } from 'react'
// import Allpizza from '../pizzadata.js'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'
import Pizza from '../components/Pizza.jsx';
import { getAllPizzas } from '../actions/pizzaAction.js';

function HomeScreen() {
    const dispatch = useDispatch();
    const pizzastate = useSelector(state => state.getAllPizzaReducer)
    const { loading, pizzas, error } = pizzastate;
    useEffect(() => { dispatch(getAllPizzas()) }, [dispatch])
    return (
        <div>
            <Container>
                {
                    loading ? (<h1>Loading...</h1>)
                        : error ? (<h1>Error while fetching pizzas</h1>) :
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