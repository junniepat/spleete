
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle, 
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Button } from 'antd';

import brand from '../img/brand.png'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/"><img src={brand} alt={'brand'}  style={{height: "40px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle}>   ☰</NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
     
          <Nav className="ml-auto mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Businesses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Individuals</NavLink>
            </NavItem>
          </Nav>

          <Button type="primary">Sign up</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;