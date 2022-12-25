import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';



let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}



function Product() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div id='product' >
      <h1 className="text-center text-success">Product</h1>


      <CardGroup className='m-2 '>


        <Card className='m-3' >
          <Card.Img variant="top" src="https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple_Watch_SE_v2_GPS_44mm_Space_Grey_Aluminium_Case_Midnight_Sport_Band_1_.jpg" />
          <Card.Body>
            <Card.Title>Smart WatCh</Card.Title>
            <Button variant="primary" onClick={() => setModalShow(true)}>BuY</Button>
            <Prices
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

          </Card.Body>
        </Card>


        <Card className='m-3' >
          <Card.Img variant="top" src="https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple_Watch_SE_v2_GPS_44mm_Space_Grey_Aluminium_Case_Midnight_Sport_Band_1_.jpg" />
          <Card.Body>
            <Card.Title>Smart WatCh</Card.Title>
            <Button variant="primary" onClick={() => setModalShow(true)}>BuY</Button>

          </Card.Body>
        </Card>



        <Card className='m-3' >
          <Card.Img variant="top" src="https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple_Watch_SE_v2_GPS_44mm_Space_Grey_Aluminium_Case_Midnight_Sport_Band_1_.jpg" />
          <Card.Body>
            <Card.Title>Smart WatCh</Card.Title>
            <Button variant="primary" onClick={() => setModalShow(true)}>BuY</Button>

          </Card.Body>

        </Card>
        
      </CardGroup>
      <CardGroup className='m-2 '>


        <Card className='m-3' >
          <Card.Img variant="top" src="https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple_Watch_SE_v2_GPS_44mm_Space_Grey_Aluminium_Case_Midnight_Sport_Band_1_.jpg" />
          <Card.Body>
            <Card.Title>Smart WatCh</Card.Title>
            <Button variant="primary" onClick={() => setModalShow(true)}>BuY</Button>
            <Prices
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

          </Card.Body>
        </Card>


        <Card className='m-3' >
          <Card.Img variant="top" src="https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple_Watch_SE_v2_GPS_44mm_Space_Grey_Aluminium_Case_Midnight_Sport_Band_1_.jpg" />
          <Card.Body>
            <Card.Title>Smart WatCh</Card.Title>
            <Button variant="primary" onClick={() => setModalShow(true)}>BuY</Button>

          </Card.Body>
        </Card>



        <Card className='m-3' >
          <Card.Img variant="top" src="https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple_Watch_SE_v2_GPS_44mm_Space_Grey_Aluminium_Case_Midnight_Sport_Band_1_.jpg" />
          <Card.Body>
            <Card.Title>Smart WatCh</Card.Title>
            <Button variant="primary" onClick={() => setModalShow(true)}>BuY</Button>

          </Card.Body>

        </Card>
        
      </CardGroup>

      <div className='m-4'>
        <Pagination>{items}</Pagination>

      </div>


    </div>
  );
}

export default Product;

function Prices(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Prices</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row >
            <Col>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple_Watch_SE_v2_GPS_44mm_Space_Grey_Aluminium_Case_Midnight_Sport_Band_1_.jpg"
                />
                <Figure.Caption>
                  Smart WatCH
                </Figure.Caption>
              </Figure>

            </Col>
            <Col>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Product Name</td>
                    <td>Smart WatCh</td>
                  </tr>
                  <tr>
                    <td>Prices</td>

                    <td>199$</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>199$</td>
                  </tr>
                </tbody>
              </Table>


            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button >BuY</Button>
      </Modal.Footer>
    </Modal>
  );
}

