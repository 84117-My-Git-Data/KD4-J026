
import Navbar from "../components/navbar"
import { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
function ParkingCost() {
  const [bikeCost, setBikeCost] = useState('');
  const [carCost, setCarCost] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Bike Cost: ${bikeCost}, Car Cost: ${carCost}`);
  }; 
  return (<div>
    <Navbar/>
    <h2 className="page-header">Parking Cost</h2>

    <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group controlId="bikeCost">
                            <Form.Label>Parking Cost for Bike</Form.Label>
                            <Form.Control
                                type="number"
                                value={bikeCost}
                                onChange={(e) => setBikeCost(e.target.value)}
                                placeholder="Enter bike parking cost"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group controlId="carCost">
                            <Form.Label>Parking Cost for Car</Form.Label>
                            <Form.Control
                                type="number"
                                value={carCost}
                                onChange={(e) => setCarCost(e.target.value)}
                                placeholder="Enter car parking cost"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={{ span: 6, offset: 3 }} className="text-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
  </div>

  )
}

export default ParkingCost
