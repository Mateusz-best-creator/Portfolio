import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import git from '../../assets/git.svg';
import linkedin from '../../assets/linkedin.svg';
import "./navigation_bar.styles.css";

function Navigationbar() {
    return (
        <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" style={{ fontFamily: 'Lato' }}>Home</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="icons" style={{ justifyContent: 'end' }}>
                    <Nav className="me-auto">
                        <Nav.Link href="/about_me">About Me</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                    <Nav style={{ gap: '0.5rem', alignItems: 'center' }}>
                        <a className='social-link' href="https://github.com/Mateusz-best-creator" target="_blank" rel="noopener noreferrer">
                            <img src={git} alt="GitHub" />
                        </a>
                        <a className='social-link' href="https://www.linkedin.com/in/mateusz-wieczorek-b9b21925a/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;
