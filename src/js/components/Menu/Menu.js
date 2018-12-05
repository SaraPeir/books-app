import React, { Component } from 'react';
import './Menu.css';
import menuHamburger from '../../../Images/hamburger-menu.png';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(){
        super();
        this.state = {
            isClosed: true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({
            isClosed: !this.state.isClosed
        })
        console.log(this.state.isClosed);
    }

  render() {
      let closingMenu = this.state.isClosed === true ? 'menu-closed' : 'menu-opened'; 
    return (
      <div className="menu">
        <div onClick={this.toggleMenu} className="icon-container">
            <img src={menuHamburger} alt='menu-hamburger icon' className="hamburger-menu-icon" />
        </div>
        <div className="overflowed">
            <div className={`options-container ${closingMenu}`}>
                <div className="option"><Link to='/' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros de ficción </Link></div>
                <div className="option"><Link to='/noFiccion' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros de no ficción </Link></div>
                <div className="option"><Link to='/favourites' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros favoritos </Link></div>
            </div>
        </div>
      </div>
    );
  }
}

export default Menu;