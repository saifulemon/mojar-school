import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../images/about-us.png'
import CountUp from 'react-countup';
import './AboutUs.css'

const AboutUs = () => {
    return <section id='about'>
        <Container>
            <Row className='align-items-center'>
                <Col lg='6' md='6'>
                    <div className="about-img">
                        <img src={aboutImg} alt="about-img" className='w-100 img-fluid' />
                    </div>
                </Col>
                <Col lg='6' md='6' className='text-center text-lg-start'>
                    <div className="about-content">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, unde vel quam possimus esse quisquam consequuntur et odit qui dicta incidunt voluptatem, officiis labore laudantium reiciendis ratione iusto quidem consectetur! Suscipit, odio temporibus laudantium excepturi sunt atque totam nobis deserunt ipsam quos maiores, voluptates consequuntur qui, illo placeat est at!</p>

                        <div className="about-counter">
                            <div className=" d-flex gap-5 align-items-center">
                                <div className="single-counter">
                                    <span className="counter">
                                        <CountUp start={0} end={25} duration={2} suffix="K" />
                                    </span>

                                    <p className="counter-title">Completed Projects</p>
                                </div>

                                <div className="single-counter">
                                    <span className="counter">
                                        <CountUp start={0} end={12} duration={2} suffix="M" />
                                    </span>

                                    <p className="counter-title">Patient Around World</p>
                                </div>
                            </div>

                            <div className=" d-flex gap-5 align-items-center">
                                <div className="single-counter">
                                    <span className="counter">
                                        <CountUp start={0} end={95} duration={2} suffix="M" />
                                    </span>

                                    <p className="counter-title">Ideas Raised Funds</p>
                                </div>

                                <div className="single-counter">
                                    <span className="counter">
                                        <CountUp start={0} end={5} duration={2} suffix="K" />
                                    </span>

                                    <p className="counter-title">Categories Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default AboutUs;