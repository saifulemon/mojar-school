import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import './Footer.css'


const footerQuickLinks = [
    {
        display: "Home",
        url: "#",
    },
    {
        display: "About US",
        url: "#",
    },

    {
        display: "Courses",
        url: "#",
    },

    {
        display: "Blog",
        url: "#",
    },
];

const footerInfoLinks = [
    {
        display: "Privacy Policy",
        url: "#",
    },
    {
        display: "Membership",
        url: "#",
    },

    {
        display: "Purchases Guide",
        url: "#",
    },

    {
        display: "Terms of Service",
        url: "#",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col lg="3" md="6" className="mb-4 text-center">
                        <h2 className="d-flex align-items-center gap-1 justify-content-center">
                            <i class="ri-pantone-line"></i> Learners.
                        </h2>

                        <div className="follows">
                            <p className="mb-0">Follow us on social media</p>
                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-facebook-line"></i>
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-linkedin-line"></i>
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-twitter-line"></i>
                                </a>
                            </span>
                        </div>
                    </Col>

                    <Col lg="3" md="6" className="mb-4 text-center">
                        <h6 className="fw-bold">Explore</h6>
                        <ListGroup className="link-list">
                            {footerQuickLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link-item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" className="mb-4 text-center">
                        <h6 className="fw-bold">Information</h6>
                        <ListGroup className="link-list">
                            {footerInfoLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link-item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" className="text-center">
                        <h6 className="fw-bold">Get in Touch</h6>

                        <p>Address: Feni, Bangladesh</p>
                        <p> Phone: +88 01234545 </p>
                        <p>Email: example@gmail.com</p>
                    </Col>
                    <Col lg='12' className="text-center">
                      <p>&copy; <span className='text-success'>Saiful Emon</span> | All Rights Reserved.</p>            
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;