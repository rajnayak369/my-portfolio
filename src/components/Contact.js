import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contact from '../images/contact.svg';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
          })
      }
    
      const handleSubmit = async (e) => {

        e.preventDefault();
        setButtonText("Sending...");
        setTimeout(() => {
            console.log('Three seconds have passed2.');
            setButtonText("Send");
        }, 5000);
        setFormDetails(formInitialDetails);
      };
    return (
      
        <section className="contact" id="contact-us">
          
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
              <TrackVisibility>
               {({ isVisible }) => 
                    <img className={isVisible?"animate__animated animate__rubberBand":""}   src={contact} alt="Contact Us"/>
                  }
                  </TrackVisibility>
              </Col>
              <Col size={12} md={6}>
              <TrackVisibility>
               {({ isVisible }) => 
                    <h2 className={isVisible?"animate__animated animate__zoomIn animate__slow":""}>Get In Touch</h2>
                  }
                  </TrackVisibility>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                          <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                       
                      </Row>
                    </form>
                
              </Col>
            </Row>
          </Container>

        </section>
      );
}

export default Contact;