import React from 'react';
import logo from '../images/dbz.jpg';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'

//import logo from '../images/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <Image src={logo} roundedCircle width="45" height="45" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Opciones" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Item</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Item</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Item</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separando link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}

export default Header;