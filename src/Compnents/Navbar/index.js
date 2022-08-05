import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.js'
import {NavbarSection , Logo , Logo_text, Ul_list , List_item , Anchor ,NavbarLink} from './Navbar.js'
const Navbar = () => {
  return (
    <NavbarSection>
      <div className='container'>
        <Logo>
          <Logo_text> Ultra Profile</Logo_text>
        </Logo>
      <Ul_list>
        <List_item><NavbarLink to="/">Home</NavbarLink></List_item>
        <List_item><Anchor href="#">Work</Anchor></List_item>
        <List_item><Anchor href="#">Portfolio</Anchor></List_item>
        <List_item><Anchor href="#">Resume</Anchor></List_item>
        <List_item><Anchor href="#">About</Anchor></List_item>
        <List_item><NavbarLink to="/contact">Contact</NavbarLink></List_item>
      </Ul_list>
      </div>      
    </NavbarSection>
  );
}

export default Navbar;
