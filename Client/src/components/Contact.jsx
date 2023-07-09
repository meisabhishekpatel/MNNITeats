import React from 'react'
import {Container, Row, Col, Table, Image} from 'react-bootstrap'
import{FiPhoneCall} from "react-icons/fi";
import{ImMobile} from "react-icons/im";
import{CiMail} from "react-icons/ci";
import "../App.css"

const Contact = () => {
  return (
    <>
      <Container style={{marginTop:'50px',backgroundColor: "#272D2F"}}>
        <Row>
            <Col md={6}>
                <h2 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive", fontWeight: "bold", padding: "10px"}}>MNNITEats</h2>
                <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>We're here to assist you and answer any questions or concerns you may have. Please feel free to reach out to us using any of the methods below. We strive to provide prompt and helpful responses to all inquiries.</p>
    <Table striped bordered hover className="text-center" style={{padding: "10px"}}>
      <thead>
        <tr>
          <th className="bg-warning text-center" colSpan={3}>--- Contact Details ---</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-warning">
          <td style={{color:"#FFC529"}}><FiPhoneCall /></td>
          <td style={{color:"#FFC529"}}>Phone</td>
          <td style={{color:"#FFC529"}}>0123-456789</td>
        </tr>
        <tr class="warning">
          <td class="warning"style={{color:"#FFC529"}}><ImMobile /></td>
          <td color="warning"style={{color:"#FFC529"}}>Call</td>
          <td style={{color:"#FFC529"}}>1234567890</td>
        </tr>
        <tr class="warning" style={{color:"#FFC529"}}>
          <td style={{color:"#FFC529"}}><CiMail /></td>
          <td style={{color:"#FFC529"}}>Email</td>
          <td style={{color:"#FFC529"}}>Help@urdomain.com</td>
        </tr>
      </tbody>
    </Table>
            </Col>
           
            <Col md={6}>
            <Image class="image" src="images/farmhouse.jfif" style={{width:'100%', height:'100%',border:"solid 10px"}} />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
