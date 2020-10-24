import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand>MemeZzz</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem active>
            <Link to="/">Template</Link>
          </NavItem>
          <NavItem>
            <Link to="/mymeme">My memeZzz</Link>
          </NavItem>
        </Nav>
        <NavbarText>Click on the template and create memes!</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
