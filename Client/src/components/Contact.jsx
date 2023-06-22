import React from 'react'
import {Container, Row, Col, Table, Image} from 'react-bootstrap'
import{FiPhoneCall} from "react-icons/fi";
import{ImMobile} from "react-icons/im";
import{CiMail} from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
        <Row>
            <Col md={6}>
                <h1>MNNITEats</h1>
                <p>We're here to assist you and answer any questions or concerns you may have. Please feel free to reach out to us using any of the methods below. We strive to provide prompt and helpful responses to all inquiries.</p>
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th className="bg-warning text-center" colSpan={3}>--- Contact Details ---</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FiPhoneCall /></td>
          <td>Phone</td>
          <td>0123-456789</td>
        </tr>
        <tr>
          <td><ImMobile /></td>
          <td>Call</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td><CiMail /></td>
          <td>Email</td>
          <td>Help@urdomain.com</td>
        </tr>
      </tbody>
    </Table>
            </Col>
           
            <Col md={6}>
            <Image src="images/farmhouse.jfif" style={{width:'100%', height:'100%'}} />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
