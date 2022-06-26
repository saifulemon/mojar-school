import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import chooseImg from '../../images/why-choose-us.png'
import './ChooseUs.css'
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player';

const ChooseUs = () => {

    const [showVideo, setShowVideo] = useState(false);

    return <section>
        <Container>
            <Row className='align-items-center'>
                <Col lg='6' md='6' className='text-center text-lg-start'>
                    <div className="choose-content pr-sm-0 pr-5">
                        <h2>Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, dolorem placeat eius neque voluptatum optio sequi iure nesciunt distinctio nulla officia porro assumenda mollitia iste labore esse consequatur nostrum similique. Culpa, dolor laborum. Facilis expedita consectetur neque, maiores optio inventore. Corporis explicabo saepe ad non. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab culpa recusandae tenetur odit excepturi nobis delectus unde temporibus perferendis!</p>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="choose-img">
                        {showVideo ? (
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=Dai9lZ4Sne0"
                                controls
                                width="100%"
                                height="350px"
                            />
                        ) : (
                            <img src={chooseImg} alt="" className="w-100" />
                        )}

                        {!showVideo && (
                            <span className="play-icon">
                                <FontAwesomeIcon icon={faPlayCircle} className="play-bth text-success" onClick={() => setShowVideo(!showVideo)} />
                            </span>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default ChooseUs;