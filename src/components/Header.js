import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Header = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Avios</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              {" "}
              Add Product
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
