import React from 'react'
import { Container, Navbar, Nav  } from 'react-bootstrap';

export const Menu = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">UserApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/usuarios">Usuários</Nav.Link>
          <Nav.Link href="/contato">contato</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
    
  </>
    
      
    
  )
}


