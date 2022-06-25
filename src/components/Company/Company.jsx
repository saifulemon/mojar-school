import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faVimeo, faPinterest, faDribbble, faApple , faGoogle, faFirstdraft } from '@fortawesome/free-brands-svg-icons';

const Company = () => {
    return <section>
        <Container>
            <Row className='justify-content-center'>
                <Col lg="2" md="3" sm="4" xs="6">
                    <h3 className=" d-flex align-items-center gap-1">
                        <FontAwesomeIcon className="text-success" icon={faVimeo} /> Vimeo
                    </h3>
                </Col>

                <Col lg="2" md="3" sm="4" xs="6">
                    <h3 className=" d-flex align-items-center gap-1">
                    <FontAwesomeIcon className="text-success" icon={faPinterest} /> Pinterest
                    </h3>
                </Col>

                <Col lg="2" md="3" sm="4" xs="6">
                    <h3 className=" d-flex align-items-center gap-1">
                    <FontAwesomeIcon className="text-success" icon={faDribbble} /> Dribble
                    </h3>
                </Col>

                <Col lg="2" md="3" sm="4" xs="6">
                    <h3 className=" d-flex align-items-center gap-1">
                        {" "}
                        <FontAwesomeIcon className="text-success" icon={faApple} /> Apple
                    </h3>
                </Col>

                <Col lg="2" md="3" sm="4" xs="6">
                    <h3 className=" d-flex align-items-center gap-1">
                        {" "}
                        <FontAwesomeIcon className="text-success" icon={faFirstdraft} /> Finder
                    </h3>
                </Col>

                <Col lg="2" md="3" sm="4" xs="6">
                    <h2 className=" d-flex align-items-center gap-1">
                        {" "}
                        <FontAwesomeIcon className="text-success" icon={faGoogle} /> Google
                    </h2>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Company;