import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faSwatchbook, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {

    return (
        <header className='header'>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold' href="#"><FontAwesomeIcon className="text-success" icon={faSwatchbook} /> Leraners.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 navs-item my-sm-0" navbarScroll>
                        <Nav.Link className='fw-bold' href="#action1">Home</Nav.Link>
                        <Nav.Link className='fw-bold' href="#action1">About</Nav.Link>
                        <Nav.Link className='fw-bold' href="#action1">Crouses</Nav.Link>
                        <Nav.Link className='fw-bold' href="#action1">Pages</Nav.Link>
                        <Nav.Link className='fw-bold' href="#action1">Blog</Nav.Link>

                        <div className="nav-right mt-1 d-flex align-items-center">
                            <p className="gap-2"><FontAwesomeIcon className="text-success" icon={faPhone} /> +88 0130205898</p>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
};

export default Header;