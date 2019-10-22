import React, { Component } from 'react';
import { Button, Form, Input, FormGroup } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { isTemplateElement } from '@babel/types';

class Authentification extends Component {

    constructor(props) {
        super(props);

        this.state = { mdp: '', error: false, check: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ mdp: event.target.value });
    }

    handleSubmit(event) {

        JSON.parse(localStorage.getItem("users")).map((index) => {
            if (index.password === this.state.mdp) {

                this.setState({ check: true });
                let cards = JSON.parse(localStorage.getItem("cards"));
                let cards2 = [];

                    cards.map((index2) => {
                    
                    if (index2.id == localStorage.getItem('del_card')) {

                    }
                    else {
                        cards2.push(index2);
                    }
                });
               
                localStorage.setItem("cards", JSON.stringify(cards2));
            }

            else {
                this.setState({ error: true });
            }
        });
        event.preventDefault();
    }

    error_message() {
        return (<p>Mot de passe incorrects !</p>);
    }

    error_display = () => {
        if (this.state.error) {
            return (<div className="error">{this.error_message()}</div>);
        }
        else {

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
            <div className='background'>
                {this.check_redirect()}
                <div className='form' onSubmit={this.handleSubmit} >
                    <div className='box'>
                        <Form>
                            Tapez votre mot de passe pour authentification
                            <Input type="password" name="password" id="pw" placeholder="Password. . ." value={this.state.mdp} onChange={this.handleChange} />
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

export default Authentification;