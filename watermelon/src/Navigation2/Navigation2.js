import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import './Navigation2.css';
import { Button } from 'reactstrap';


class Navigation2 extends Component {

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

        <Navbar light expand="md">

          <Link to='/'><NavbarBrand ><div className="Watermelon">Watermelon  <img src={require('./watermelon.png')} className="Compo-logo" alt="logo" /></div></NavbarBrand></Link>

          <Nav className="ml-auto">

            <Link to='/Account'>
              <NavbarBrand><Button color='danger' >
                <div className="deco">Déconnexion</div>
              </Button>
              </NavbarBrand>
            </Link>


          </Nav>

        </Navbar>

        <div class="border"></div>
      </nav>


    );

  }
}

export default Navigation2;