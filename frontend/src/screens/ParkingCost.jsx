
import Navbar from "../components/navbar"
import { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


function ParkingCost() {
  const [parkingcostperhourbike, setParkingCostPerHourBike] = useState('');
  const [parkingcostperhourcar, setParkingCostPerHourCar] = useState('');

  const handleSubmit = async(event) => {
      event.preventDefault();
      //alert(`Bike Cost: ${bikeCost}, Car Cost: ${carCost}`);
    try{
        const response = await fetch('http://localhost:5285/api/Admin/EditCost/1',{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parkingcostperhourbike,
                parkingcostperhourcar,
            }),
        });
        if(response.ok) {
            alert('Cost added successfully');
        } else {
            alert('failed to add cost') ;
        }
    }  catch (error){
        console.error('Error:', error);
    }

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
                                value={parkingcostperhourbike}
                                onChange={(e) => setParkingCostPerHourBike(e.target.value)}
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
                                value={parkingcostperhourcar}
                                onChange={(e) => setParkingCostPerHourCar(e.target.value)}
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
