import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './Connexion.css';
import {setItemLS} from '../Fonctions/Fonctions.js'




class Connexion extends Component {

    constructor(props) {
        super(props);

        this.state = { mail: '', mdp: '', check: false, error: false };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange1(event) {
        this.setState({ mail: event.target.value });
    }

    handleChange2(event) {
        this.setState({ mdp: event.target.value });
    }

    handleSubmit(event) {

        var bool = true;
        JSON.parse(localStorage.getItem("users")).map((index) => {
            if (index.email === this.state.mail) {
                if (index.password === this.state.mdp) {
                    this.setState({ check: true });
                    setItemLS("user_log", index.id);
                    bool = false;
                }
            }
        });
        if (bool) {
            this.setState({ error: true })
        }

        event.preventDefault();
    }

    error_message() {
        return (<p>Email ou mot de passe incorrects !</p>);
    }

    error_display = () => {
        if (this.state.error) {
            return (<div className="error">{this.error_message()}</div>);
        }
    }

    check_redirect = () => {
        if (this.state.check) {
            return (
                <Redirect to='/account' />
            );
        }
    }
    render() {
        return (
            <div class="panel">
                <div class='form' onSubmit={this.handleSubmit} >
                    {this.check_redirect()}
                    <div className='box'>
                        <Form>
                            <h1>Connexion</h1>
                            <FormGroup>
                                <Input type="email" name="email" id="em" placeholder="Email adress. . ." value={this.state.mail} onChange={this.handleChange1} />
                            </FormGroup>
                            <FormGroup>

                                <Input type="password" name="password" id="pw" placeholder="Password. . ." value={this.state.mdp} onChange={this.handleChange2} />
                            </FormGroup>
                            <div>
                                <Button outline color="success">Connexion</Button>
                            </div>
                        </Form>
                    </div>
                    {this.error_display()}
                </div>
            </div>
        );
    }
}
export default Connexion;
