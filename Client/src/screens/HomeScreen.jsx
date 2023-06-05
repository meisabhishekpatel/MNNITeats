import React from 'react'
import Allpizza from '../pizzadata.js'
import { Container, Row, Col } from 'react-bootstrap'
import Pizza from '../components/Pizza.jsx';

function HomeScreen() {
    return (
        <div>
            <Container>
                <Row>
                    {Allpizza.map(pizza => (
                        <Col md={4} >
                            <Pizza pizza={pizza} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen