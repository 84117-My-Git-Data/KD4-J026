import Navbar from "../components/navbar"
import Auction from "../assets/home.png"
import Footer from "../components/footer"
import { Link } from "react-router-dom"
import { Row, Col } from 'react-bootstrap';


function AdminHome() {
    return (<div className="container-fluid">
        <Navbar/>
        <div className="card bg-dark text-white image">
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <img src={Auction} className="card-img-top" alt="Auction" width="80" height="500" style={{ borderRadius: '10px' }}/>
                <div className="card-img-overlay">
                    <h2 className="card-title" style={{textAlign:"center"}}>Park. Pay. Go.</h2>
                    <p style={{textAlign:"center"}}>Easily pay for parking from your </p>
                </div>
            </Link>
        </div>
        <div className="row">
            <div className="col-4">
                <Row>
                    <Col md={12}>
                    <h2 className="text-warning">Our Mission</h2>
                        <p className="text-muted">
                        Our mission is to provide a seamless and hassle-free parking experience for drivers everywhere. We aim to reduce the stress and time associated with finding parking, making urban mobility more efficient.
                        </p>
                    </Col>
                </Row>
            </div>      
            <div className="col-4">
                <Row>
                    <Col md={12}>
                        <h2 className="text-info">Our Services</h2>
                        <p className="text-muted">
                            We offer a variety of services including online booking, real-time availability updates, and secure payment options. Our platform is designed to provide a user-friendly experience, making it easy for you to find and reserve parking spots in just a few clicks.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="col-4">
                <Row>
                    <Col md={12}>
                        <h2 className="text-warning">Meet the Team</h2>
                        <p className="text-muted">
                            Our team is composed of dedicated professionals with diverse backgrounds in technology, urban planning, and customer service. We are passionate about making parking easier and more accessible for everyone.
                        </p>
                    </Col>
                </Row>
            </div>
                 
        </div>
        <div className="card bg-dark text-white image mt-5" >
            <span>Get To Know Us</span>
            <h2>
              <span>We</span> <span>Working</span> <span>For</span> <span>You</span> <span>To</span> <strong><span>Build</span> <span>Your</span> <span>Business</span> <span>Fast</span></strong>
            </h2>
            <p>Our mission is to help you build your business fast, with innovative solutions designed to accelerate your growth. We understand that time is of the essence, so we've crafted services and products that streamline operations, optimize resources, and drive rapid results. Whether you're a startup looking to scale quickly or an established business seeking to enhance your processes, we have the expertise and tools to get you there.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontSize: '2rem' }}><i className="bi bi-check2"></i></div>
                <div>
                  <h2><span>99</span>%</h2>
                  <div>Satisfaction rate</div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontSize: '2rem' }}><i className="bi bi-check2"></i></div>
                <div>
                  <h2>$<span>9</span>M</h2>
                  <div>Global revenue</div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: '0 0 50%', maxWidth: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ visibility: 'visible', animationName: 'slideInRight' }}>
            </div>
          </div>
        <Footer/>
    </div>
    )
}

export default AdminHome