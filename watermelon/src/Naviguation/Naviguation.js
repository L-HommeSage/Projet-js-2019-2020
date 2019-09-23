import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
  DropdownItem
} from 'reactstrap';
import './Navigation.css';

class Naviguation extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <nav className="Compo">

        <Navbar  light expand="md">

        <Link to='/'><NavbarBrand ><div className="Watermelon">Watermelon  <img src={require('./watermelon.png')} className="Compo-logo" alt="logo" /></div></NavbarBrand></Link>

            <Nav className="ml-auto">
            <Link to='/inscription'>
               <NavbarBrand>
                <div className="Watermelon">Inscription</div>
              </NavbarBrand>
              </Link>
              <Link to='/connexion'>
              <NavbarBrand>
                <div className="Watermelon">Connexion</div>
              </NavbarBrand>
              </Link>

            </Nav>
         
        </Navbar>

        <div class="border"></div>
      </nav>
    

    );

  }
}

export default Naviguation;