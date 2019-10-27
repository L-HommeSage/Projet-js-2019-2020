import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import './Navigation.css';

class Navigation extends Component {
    constructor(props) {//Constructeur
        super(props);
        this.state = {
            isOpen: false
        };
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
                                <Button outline color="warning">
                                    <div className="Watermelon">Inscription</div>
                                </Button>
                            </Link>
                        </NavbarBrand>
                        <NavbarBrand>
                            <Link to='/connexion'>
                                <Button outline color="warning">
                                    <div className="Watermelon">Connexion</div>
                                </Button>
                            </Link>
                        </NavbarBrand>
                    </Nav>
                </Navbar>
                
            </div>
        );
    }
}
export default Navigation;