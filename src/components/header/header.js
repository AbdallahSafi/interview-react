import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Navbar.Brand className="text-white">Covid-19 Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white">
            <Nav.Item className="mx-4" >
              <Link  to="/" style={{ textDecoration: "none" }}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link  to="/create" style={{ textDecoration: "none" }}>Create</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
