import React from 'react';
import { Link } from "react-router-dom";
import './styled.js';
import logo from '../../img/common/logo.jpg';
import { Nav, NavbarA, NavbarImg, NavbarLi, NavbarListA, NavbarUl } from './styled.js';

function NavBar() {
  return (
    <Nav>
      <NavbarA href='/'><NavbarImg
        src={logo}
        alt='Logo'
      /></NavbarA>
      <NavbarUl>
        <NavbarLi><NavbarListA> Noticias</NavbarListA></NavbarLi>
        <NavbarLi><NavbarListA href='/matches'>Partidos</NavbarListA></NavbarLi>
        <NavbarLi><NavbarListA href='/players'>Plantel</NavbarListA></NavbarLi>
      </NavbarUl>
    </Nav>
  );
}

export default NavBar;