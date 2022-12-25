import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function About() {
  return (
    <Container id='aboutus'>
      <h1 className="text-center text-success">About US</h1>

      <Row>
        <Col>
        <Card className='m-5'>
        <Card.Body>The smart watch is a computerized wristwatch that performs basic tasks such as calculations, translation, and games. It also operates mobile applications, and a small number of them run the mobile operating system. It operates fm radio, audio and video files for the user via Bluetooth, and it has the ability to answer phone calls. Some of these devices include capabilities such as a camera, maps, compass, calculator, touch screen, mobile phone, remote sensing system, geographical map display, wireless headphones, microphone, or router. There is a type called sports watch and it is made for training. This type of watch can collect information from external or internal sensors and can control information and support wireless technology such as Wi-Fi and Bluetooth.
              The first digital watch manufactured by Hanilation was named the Pulchar watch by Seiko in 1997. The D409 was the first model with a data entry keypad feature and a very small 112-digit memory and was issued in gold, black and silver. These models were followed by many in the 1980s.</Card.Body>
        </Card>
        </Col>
        <Col xs={6}>


          <Card className=" m-2">
            <Card.Img  src="https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple_Watch_SE_v2_GPS_44mm_Space_Grey_Aluminium_Case_Midnight_Sport_Band_1_.jpg" alt="Card image" />
          </Card>

        </Col>
      </Row>
    </Container>
  );
}

export default About;
