import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <section>
            <Container className="newsletter">
                <Row className="align-items-center">
                    <Col lg="12" className="text-center justify-content-center">
                        <h2 className="mb-4">Subscribe Our Newsletter</h2>
                        <div className="subscribe">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 shadow-none"
                                    aria-label="Search"
                                />
                            </Form>
                            <Button variant="outline-success">Search</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;