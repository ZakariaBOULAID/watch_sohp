import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SmartImg from '../components/image/Groupa.png';
import Figure from 'react-bootstrap/Figure';
import "../components/Home.css"
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <Container>
      <Row >
        <Col>

          <div className='hero-text'>
            <h1 >welcom To My ShOop</h1>
            <h1 >You Can ShOop New</h1>

            <Button variant="primary">About us</Button>{' '}
            <Button variant="primary" onClick={handleShow}>Sign In</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>You Can Sign Right New</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" autoFocus />
                  </Form.Group>
                  <Form.Group className='mb-5' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='Password' placeholder='Password' />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save </Button>
              </Modal.Footer>
            </Modal>
            <Figure>
              <Figure.Image width={171} height={180} alt="171x180" src={SmartImg}/>
            </Figure>
          </div>
        </Col>
        <Col>
          <img className=" w-100" src={SmartImg} alt=""/>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={SmartImg}
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
