import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { Container, Row, Col, Card } from 'react-bootstrap';

function ContactUs() {
    return (
        <div className="container-fluid">
            <Navbar />
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="page-header">Contact Us</h2>
                        <br />
                        <br />
                        <p>
                            Have questions or need support? Contact us at support@onlineparking.com or call us at (123) 456-7890. Follow us on social media for the latest updates and news.
                        </p>
                        <form>
                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                    </div>
                                </Col>
                            </Row>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <Footer />
        </div>
    );
}


export default ContactUs