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
import logo from '../images/Logo2.png';
// const imagemLogo = require('../images/LOGOLTAG.png');

const linkStyle = {
  marginRight: 15
}
const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <style>{`
      .logo{
        width: 35px;
        height: 35px;
      `}</style>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/" ><img src={logo} alt='logo' id='logo' className="logo"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Início</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/sobre">Trabalhos</NavLink>
              </NavItem> */}
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