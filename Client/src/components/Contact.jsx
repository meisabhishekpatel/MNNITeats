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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae ab nobis. Error nostrum ad architecto eaque quis praesentium illum facilis facere? Inventore vero impedit ut, cum ad odit asperiores libero debitis et, officiis veniam laborum alias tempora, neque aperiam. Possimus, dolores in quod rem consequatur ut repellat distinctio omnis necessitatibus earum, quo ipsam, molestiae provident repellendus molestias neque ullam voluptas vel esse ratione adipisci debitis ex. Accusantium impedit sunt temporibus animi culpa eos, nemo totam itaque voluptas molestiae nulla alias veritatis veniam cum earum quod illo dolores dicta voluptate commodi dolore quo porro vitae dolorum? Vero, dolore! Aliquam labore similique at dolore quasi qui non, ut dicta aliquid autem nobis doloribus, a, exercitationem officiis magni officia. Minus asperiores molestiae enim velit sequi tempora possimus fuga corrupti accusamus laudantium? Corrupti nisi mollitia repudiandae tenetur, nihil earum quod omnis soluta repellendus hic quo odio reiciendis consectetur autem enim temporibus animi, exercitationem sed quasi error iusto, debitis facere! Rerum vitae praesentium iure labore atque doloremque, quia distinctio, repellat saepe repudiandae inventore unde molestiae, ex eum. Et error cupiditate amet ipsa maiores ex voluptatum magnam voluptatibus suscipit explicabo accusantium nesciunt id mollitia minus ad quo eos praesentium, rem nam ipsam laudantium? Dolorum, expedita.</p>
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
