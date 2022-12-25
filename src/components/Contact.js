
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Contact() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }} id='contact'
    >
      <h1 className="text-center text-success">Contact Us</h1>

      <Modal.Dialog className="mb-5">

        <Modal.Header >
          <Modal.Title >Contact us</Modal.Title>
        </Modal.Header>

        <Modal.Body>


          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-2' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' placeholder='Password' />
            </Form.Group>
            <Form.Group
              className="mb-2" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Send</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Contact;