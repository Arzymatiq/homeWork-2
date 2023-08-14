import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav
                        className="me-auto d-flex w-50"
                        style={{
                            marginLeft: "50%",
                            justifyContent: "space-evenly",
                        }}>
                        <Link to="/addProduct" href="#">
                            <Button variant="light">add</Button>
                        </Link>
                        <Link to="/" href="#">
                            <Button variant="light">list</Button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
