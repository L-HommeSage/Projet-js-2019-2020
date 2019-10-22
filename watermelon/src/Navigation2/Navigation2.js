import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
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

  deco() {
    localStorage.removeItem("id");
    localStorage.removeItem("user_amount");
    

  }

  render() {

    return (
      <div className="Compo">

        <Navbar light expand="md">

          <NavbarBrand >
            <Link to='/account'>
              <div className="Watermelon">
                Watermelon
                <img src={require('./watermelon.png')} className="Compo-logo" alt="logo" />
              </div>
            </Link>
          </NavbarBrand>

          <Nav className="ml-auto">

            <NavbarBrand>
              <span className='button'>
              <Link to='/account'>
                <Button color='info' >
                  <div className="deco" >Mon compte</div>
                </Button>
              </Link>
              </span>
              
              <span className='button'>
              <Link to='/addCard'>
                <Button color='info' >
                  <div className="deco" >Ajouter une carte</div>
                </Button>
              </Link>
              </span>
              <span className='button'>
                <Link to='/virement'>
                <Button color='info' >
                  <div className="deco" >Virement</div>
                </Button>
              </Link>
              </span>
              <span className='button'>
              <Link to='/informations'>
                <Button color='info' >
                  <div className="deco" >Mes informations</div>
                </Button>
              </Link>
              </span>
               <span className='button'>
              <Link to='/'>
                <Button color='danger' onClick={this.deco}>
                  <div className="deco">Déconnexion</div>
                </Button>
              </Link>
              </span>
            </NavbarBrand>

          </Nav>

        </Navbar>

        <div class="border"></div>
      </div>
    );
  }
}

export default Navigation2;