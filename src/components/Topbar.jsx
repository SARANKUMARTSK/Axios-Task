import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyUser,faTableColumns,faUserPlus,faUserPen } from '@fortawesome/free-solid-svg-icons';
function Topbar() {
  return <>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>CRUD-APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/home' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faHouseChimneyUser} />&nbsp;Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/add' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faUserPlus} />&nbsp;Add-User</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default Topbar