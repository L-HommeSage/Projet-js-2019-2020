import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import './Navigation.css';

class Navigation extends Component {

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
      <div className="Compo">

        <Navbar light expand="md">

          <NavbarBrand>
            <Link to='/'>
              <div className="Watermelon">
                Watermelon
                  <img src={require('./watermelon.png')} className="Compo-logo" alt="logo" />
              </div>
            </Link>
          </NavbarBrand>


          <Nav className="ml-auto">
            <NavbarBrand>
              <Link to='/inscription'>
                <div className="Watermelon">Inscription</div>
              </Link>
            </NavbarBrand>

            <NavbarBrand>
              <Link to='/connexion'>
                <div className="Watermelon">Connexion</div>
              </Link>
            </NavbarBrand>
          </Nav>

        </Navbar>

        <div class="border"></div>
      </div>


    );

  }
}

export default Navigation;