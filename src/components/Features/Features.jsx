import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css'

const FeatureData = [
    {
        title: "Quick Learning",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: "ri-draft-line",
    },

    {
        title: "All Time Support",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: "ri-discuss-line",
    },

    {
        title: "Certification",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: "ri-contacts-book-line",
    },
];
console.log(FeatureData)

const Features = () => {
    return (
        <section>
            <Container>
                <Row>
                    {FeatureData.map((item, index) => (
                        
                        <Col lg="4" md="6" key={index}>
                            <div className="single-feature text-center px-4">
                                <h2 className="mb-3">
                                    <i className={item.icon}></i>
                                </h2>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                               
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Features;