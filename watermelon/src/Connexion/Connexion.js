import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './Connexion.css';
import { setItemLS, getItemLS } from '../Fonctions/Fonctions.js';

class Connexion extends Component {

    constructor(props) { //Constructeur
        super(props);
        this.state = {
             mail: '', 
             mdp: '', 
             check: false, 
             error: false 
        };

        //Bind des fonctions liées aux évènements
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange1(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ mail: event.target.value });
    }

    handleChange2(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ mdp: event.target.value });
    }

    handleSubmit(event) { //Actions lorsque l'on souhaite se connecter
        var bool = true; //Booléen de véririfcation
        getItemLS("users").map((index) => {
            if (index.email === this.state.mail) { //Pour l'email saisi, on vérifie si le mot de passe correspond
                if (index.password === this.state.mdp) {
                    bool = false;
                    setItemLS("user_log", index.id); //On Sauvegarde l'id du l'utilisateur connecté
                    this.setState({ check: true });
                }
            }
        });

        if (bool) {
            this.setState({ error: true })
        }

        event.preventDefault();
    }

    error_message() { //Message que l'on souhaite afficher en cas d'erreur
        return (<p>Email ou mot de passe incorrects !</p>);
    }

    error_display = () => { //Si le state 'error' est à 'true' on affiche le message d'erreur
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
                        <Form> {/*Formulaire de connexion*/}
                            <h1>Connexion</h1>
                            <FormGroup>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="em" 
                                    placeholder="Email adress. . ." 
                                    value={this.state.mail} 
                                    onChange={this.handleChange1} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                    type="password" 
                                    name="password" 
                                    id="pw"
                                    placeholder="Password. . ." 
                                    value={this.state.mdp} 
                                    onChange={this.handleChange2} 
                                />
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
