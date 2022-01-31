import React from 'react'
import { 
  Navbar, 
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar className="mb-3" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="#home">Table Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="tables">Tables</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="queues">Queues</Nav.Link>                   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation