import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <h1>Porfolio</h1>
      <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>
      <NavLink to="/portfolio" activeClassName="is-active" exact={true} >Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="is-active" >Contact</NavLink>
    </header>
  </div>
);

export default Header;
