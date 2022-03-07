import React from 'react'
import { 
  Navbar, 
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap'

const Navigation = ({
  user,
}) => {
  return (
    <Navbar className="mb-3" bg="dark" expand="lg">
      
          <Container>
            <Navbar.Brand className="text-white" href="#home">Stock Tracker</Navbar.Brand>
            { 
              user === "admin" && (
                <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link style={{ color: "white" }} href="ingredients">Ingredients</Nav.Link>
                      <Nav.Link style={{ color: "white" }} href="outlets">Outlets</Nav.Link>                   
                    </Nav>
                  </Navbar.Collapse>
                </>
              )
            }            
          </Container>
      
          
    </Navbar>
  )
}

export default Navigation