import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css"
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <span style={{ color: "orange", fontWeight: "bold" }}>App</span>
            <span style={{ fontWeight: "bold" }}>Lab</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Key features</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
              <Nav.Link href="#link">Testiminial</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
              <Nav.Link href="#link" className="trylink">Try for free</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
