import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import img from "../../images/testimonial01.png";
import './Testimonial.css'

const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
};

const Testimonial = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" className="m-auto">
                        <div className="testimonial-img w-100">
                            <img src={img} alt="testimonial-img" className="img-fluid w-100" />
                        </div>
                    </Col>

                    <Col lg="6" md="6" sm="12" className="m-auto">
                        <div className="testimonial-wrapper d-flex justify-content-center align-items-center">
                            <div className="testimonial-content w-100">
                                <h2 className="mb-4">Our Students Voice</h2>

                                <Slider {...settings}>
                                    <div>
                                        <div className="single-testimonial">
                                            <h6 className="mb-3 fw-bold">
                                                Excellent course of materials
                                            </h6>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis saepe id voluptas molestiae. Aperiam corrupti
                                                voluptas earum at molestiae neque!
                                            </p>

                                            <div className="student-info mt-4">
                                                <h6 className="fw-bold">Jhon Doe</h6>
                                                <p>California, United State</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single-testimonial">
                                            <h6 className="mb-3 fw-bold">
                                                Excellent course of materials
                                            </h6>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis saepe id voluptas molestiae. Aperiam corrupti
                                                voluptas earum at molestiae neque!
                                            </p>

                                            <div className="student-info mt-4">
                                                <h6 className="fw-bold">Jhon Doe</h6>
                                                <p>California, United State</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single-testimonial">
                                            <h6 className="mb-3 fw-bold">
                                                Excellent course of materials
                                            </h6>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis saepe id voluptas molestiae. Aperiam corrupti
                                                voluptas earum at molestiae neque!
                                            </p>

                                            <div className="student-info mt-4">
                                                <h6 className="fw-bold">Jhon Doe</h6>
                                                <p>California, United State</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;