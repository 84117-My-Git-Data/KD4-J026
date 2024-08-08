import { Link } from "react-router-dom";
import Footer from "../components/footer1"
import Unavbar from "../components/unavbar"
import about from "../assets/about.jpg"
import carcity from "../assets/carcity.jpeg"
import carincity from "../assets/carincity.jpg"
import {Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
    return (
        <div className="container-fluid">
            <Unavbar />
            <h1 className="page-header text-primary">About Us</h1>
            <Row>
                <Col md={12}>
                    <p className="text-muted">
                        Welcome to Online Parking, your number one solution for finding and booking parking spots easily and efficiently. Founded in 2023, our company was built with the vision of transforming the parking experience through innovation and technology.
                    </p>
                </Col>
            </Row>

            <div className="row">
                <div className="col">
                <Row>
                    <Col md={12}>
                        <Card className="mb-4 border-success">
                            <Card.Body>
                                <Card.Title className="text-success">Our Mission</Card.Title>
                                <Card.Text>
                                    Our mission is to provide a seamless and hassle-free parking experience for drivers everywhere. We aim to reduce the stress and time associated with finding parking, making urban mobility more efficient.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                </div>
                <div className="col">
                    <Row>
                    <Col md={12}>
                        <Card className="mb-4 border-danger">
                            <Card.Body>
                                <Card.Title className="text-danger">Our Vision</Card.Title>
                                <Card.Text>
                                    We envision a future where parking is no longer a challenge but a convenient and reliable part of your journey. Our goal is to expand our network and continuously innovate to meet the evolving needs of our users.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </div>

                <div className="col">
                <Row>
                    <Col md={12}>
                        <Card className="mb-4 border-success">
                            <Card.Body>
                                <Card.Title className="text-success">Our Services</Card.Title>
                                <Card.Text>
                                We offer a variety of services including online booking, real-time availability updates, and secure payment options. Our platform is designed to provide a user-friendly experience, making it easy for you to find and reserve parking spots in just a few clicks.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
            <div className="row">
                    <div className="col">
                    <div className="card bg-dark text-white image">
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <img src={carincity} className="card-img-top" alt="Auction" width="80" height="300" style={{ borderRadius: '10px' }}/>

                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark text-white image">
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <img src={about} className="card-img-top" alt="Auction" width="80" height="300" style={{ borderRadius: '10px' }}/>

                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark text-white image">
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <img src={carcity} className="card-img-top" alt="Auction" width="80" height="300" style={{ borderRadius: '10px' }}/>

                        </Link>
                    </div>
                </div>
            </div>
            <Row>
                    <Col md={12}>
                        <h2 className="text-warning" style={{textAlign:"center"}}>Meet the Team</h2>
                        <p className="text-muted">
                            Our team is composed of dedicated professionals with diverse backgrounds in technology, urban planning, and customer service. We are passionate about making parking easier and more accessible for everyone.
                        </p>
                    </Col>
                </Row>

            <Footer />
        </div>
    )
}


export default AboutUs
