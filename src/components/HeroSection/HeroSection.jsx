import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import HeroImg from '../../images/hero-img1.png'
import './HeroSection.css';

const HeroSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="hero-content">
                        <h2>
                            Anytime Anywhere <br />
                            Learn on your <br />
                            Suitable Schedule
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet <br />
                            consectetur adipisicing elit. At commodi officiis nisi, <br />
                            expedita quibusdam quas.
                        </p>
                        <div className="search">
                            <Form
                                className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6" className="hero-img">
                    <img src={HeroImg} alt="hero-img" className="w-100 img-fluid" />
                </Col>
            </Row>
        </Container>

    </section>
};

export default HeroSection;