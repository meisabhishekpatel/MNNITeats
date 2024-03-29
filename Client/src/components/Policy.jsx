import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../App.css";

const policy = () => {
  return (
    <>
      
      <Container style={{ marginTop: '50px',backgroundColor: "#272D2F" }}>
        <h2 style={{ color: "#FFC529", textAlign: "center",  fontFamily: "cursive", fontWeight: "bold", padding: "10px"}}>Terms and Policy</h2>
         <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>At MNNITeats, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us. By using our website or services, you consent to the practices described below.</p>
    
        <Row>
          <Col md={10}>
            <h6 style={{ color: "#FFC529",   fontFamily: "cursive", fontWeight: "bold"}}>Information Collection:</h6>
            <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>We may collect personal information such as your name, email address, phone number, and billing/shipping address when you interact with our website, make a purchase, or contact our customer support. Additionally, we may collect non-personal information such as IP addresses, browser types, and website usage statistics through cookies and similar technologies.</p>
            <h6 style={{ color: "#FFC529",   fontFamily: "cursive", fontWeight: "bold"}}>Use of Information:</h6>
            <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>We use the collected information to:<br/>

                1. Provide and improve our products and services.<br/>
                2. Process your orders and transactions.<br/>
                3. Respond to your inquiries and provide customer support.<br/>
                4. Send you important updates, promotions, and marketing communications.<br/>
                5. Personalize your experience on our website.<br/>
                6. Analyze and enhance the performance and functionality of our website.<br/>
                7. Protect against fraud, unauthorized access, and illegal activities.</p>
            <h6 style={{ color: "#FFC529",   fontFamily: "cursive", fontWeight: "bold"}}>Data Sharing:</h6>
            <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>We do not sell, trade, or rent your personal information to third parties for their marketing purposes. However, we may share your information with trusted service providers who assist us in operating our business and servicing you. These third parties are contractually obligated to maintain the confidentiality and security of your data.</p>
           
            <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>We may also disclose your information if required by law or to protect our rights, property, or safety, as well as the rights, property, or safety of others.

</p>
            <h6 style={{ color: "#FFC529",   fontFamily: "cursive", fontWeight: "bold"}}>Data Security:</h6>
            
            <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            <h6 style={{ color: "#FFC529",   fontFamily: "cursive", fontWeight: "bold"}}>Third-Party Links:</h6>         
            <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of those third-party sites before providing any personal information.</p>
            <h6 style={{ color: "#FFC529",   fontFamily: "cursive", fontWeight: "bold"}}>Contact Us:</h6>  
            <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at:</p>      
         <h6 style={{ color: "#FFC529",   fontFamily: "cursive", fontWeight: "bold"}}>Email: privacy@mnniteats.com</h6>
         <p style={{color: "", fontFamily: "cursive", fontWeight: "bold"}}>By using our website or services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.</p>
          <h6 style={{ color: "#FFC529",   fontFamily: "cursive", fontWeight: "bold", textAlign: "center"}}>Effective Date: 22/06/2023</h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default policy;
