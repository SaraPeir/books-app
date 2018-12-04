import React, { Component } from 'react';
import './Menu.css';
import menuHamburger from '../../../Images/hamburger-menu.png';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="icon-container">
            <img src={menuHamburger} alt='menu-hamburger icon' className="hamburger-menu-icon" />
        </div>
            <div className="options-container">
                <div className="option"><Link to='/' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros de ficción </Link></div>
                <div className="option"><Link to='/noFiccion' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros de no ficción </Link></div>
                <div className="option"><Link to='/favourites' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros favoritos </Link></div>
            </div>
      </div>
    );
  }
}

export default Menu;