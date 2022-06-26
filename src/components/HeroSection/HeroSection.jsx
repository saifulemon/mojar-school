import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import HeroImg from '../../images/hero-img1.png'
import './HeroSection.css';

const HeroSection = () => {
    return <section>
        <Container>
            <Row className='align-items-center'>
                <Col lg="6" md="6" className='text-center text-lg-start'>
                    <div className="hero-content">
                        <h2>
                            Anytime Anywhere <span className='text-success'>Learn</span> on your Suitable Schedule
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi officiis nisi, expedita quibusdam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat culpa nobis non in a rerum unde corporis modi quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur officia delectus qui nobis? Molestias, sed illo. Commodi accusamus ut ullam voluptatibus totam deleniti exercitationem!
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
                    <img src={HeroImg} alt="hero-img" className="w-100 img-fluid rounded" />
                </Col>
            </Row>
        </Container>

    </section>
};

export default HeroSection;