import React from 'react'
import { 
  Navbar, 
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap'
import { ADMIN, MANAGER, EMPLOYEE } from 'config/roles'

const navigation = ({
  user,
}) => {
  return (
    <Navbar className="mb-3" bg="dark" expand="lg">
      
          <Container>
            <Navbar.Brand className="text-white" href="#home">Stock Tracker</Navbar.Brand>
            {
              !user && (
                <>
                  <Nav className="me-auto">
                    <Nav.Link style={{ color: "white" }} href="login">LOGIN</Nav.Link>
                  </Nav>
                </>
              )
            }            
            {
              user.userDetails.userType === ADMIN && (
                <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link style={{ color: "white" }} href="ingredients">Ingredients</Nav.Link>
                      <Nav.Link style={{ color: "white" }} href="outlets">Outlets</Nav.Link>      
                      <Nav.Link style={{ color: "white" }} href="users">Users</Nav.Link>                  
                    </Nav>
                  </Navbar.Collapse>
                </>
              )
            }
            {
              ( user.userDetails.userType === MANAGER || user.userDetails.userType === EMPLOYEE ) && (
                <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">                      
                      <Nav.Link style={{ color: "white" }} href="outlets">Outlets</Nav.Link>                   
                    </Nav>
                  </Navbar.Collapse>
                </>
              )
            }
            { 
              user.userDetails && (
                <>                  
                  <div style={{ color: "white" }}>                    
                    { user.userDetails.username } - { user.userDetails.userType }
                  </div>
                  <Nav className="ml-auto">
                    <Nav.Link style={{ color: "white" }} href="logout">LOGOUT</Nav.Link>
                  </Nav>
                </>
                
              )
            }                                    
          </Container>
      
          
    </Navbar>
  )
}

export default navigation