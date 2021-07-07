import React from 'react'
//import 'bootswatch/dist/slate/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, NavDropdown, Nav, Form, Button, FormControl } from "react-bootstrap"; 
const Header = () => {
    return (
        <header> 
            <Navbar bg="light" expand="lg" collapseOnSelect> 
                <Container> 
                    <LinkContainer to="/"> 
                        <Navbar.Brand>Thiri Hsu Myat Aung</Navbar.Brand>
                    </LinkContainer>
                </Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
        <NavDropdown.Item href="/ecommerce">Ecommerce</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="/SchoolProjects">School Projects</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
                </Navbar>
        </header>
          
    )
}

export default Header
