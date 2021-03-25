import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import Image from 'next/image';
// const imagemLogo = require('../images/LOGOLTAG.png');

const linkStyle = {
  marginRight: 15
}
const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/" >L.Tag</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sobre">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contato">Contato</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Leleocastro">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;