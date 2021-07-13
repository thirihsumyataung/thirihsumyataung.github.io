import React from 'react'
//import 'bootswatch/dist/slate/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, NavDropdown, Nav, Form, Button, FormControl } from "react-bootstrap"; 
const Header = () => {
    return (
        <header> 
            <Navbar collapseOnSelect bg="light" expand="xl"> 
               <Container> 
                     <LinkContainer to="/"> 
                        <Navbar.Brand>Thiri Hsu Myat Aung</Navbar.Brand>
                    </LinkContainer>
                </Container> 
              
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{float:"right"}}/>
  <Navbar.Collapse id="responsive-navbar-nav" pullRight >
    <Nav className="m4-auto">
    <Container> 
                     <LinkContainer to="/about"> 
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Container>
    <Container> 
                     <LinkContainer to="/contact"> 
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Container> 

                <Container> 
                     <LinkContainer to="/projects"> 
                        <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                </Container> 
    {/* <Nav.Link href="">Contact</Nav.Link>
    <Nav.Link href=""> Projects</Nav.Link> */}
    {/* <Nav.Link href="/ecommence">Ecommence</Nav.Link>
    <Nav.Link href="/schoolprojects"> School Projects</Nav.Link> */}
      {/* <NavDropdown title="My Projects" id="basic-nav-dropdown" className="nav-bar">
        <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
        <NavDropdown.Item href="/ecommerce">Ecommerce</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/SchoolProjects">School Projects</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    
  </Navbar.Collapse>
                </Navbar>
        </header>
          
    )
}

export default Header
