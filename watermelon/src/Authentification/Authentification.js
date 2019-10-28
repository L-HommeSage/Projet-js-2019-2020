import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { setItemLS, getItemLS } from '../Fonctions/Fonctions.js';
import { Redirect } from 'react-router-dom';

class Authentification extends Component {
    constructor(props) { //Constructeur
        super(props);
        this.state = {
            mdp: '',
            error: false,
            check: false
        };

        //Bind des fonctions liées aux évènements
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ mdp: event.target.value });
    }

    handleSubmit(event) { //Actions lorsque l'on soumet un mot de passe
        getItemLS("users").map((index) => {
            if (index.password === this.state.mdp) { //On vérifie si le mot de passe saisie correspond
                let cards = getItemLS("cards"); //On récupère la table d'objets Cards
                let cards2 = []; //On crée une deuxième table d'objet

                cards.map((index2) => {
                    if (index2.id == getItemLS("del_card")) {
                    }
                    else { //Si la carte "index2" n'est pas celle qui doit être supprimer, on l'ajoute à la table
                        cards2.push(index2);
                    }
                });
                setItemLS("cards", cards2);//On sauvegarde la modification dans le LocalStorage

                this.setState({ check: true });
            }

            else {
                this.setState({ error: true });
            }
        });
        event.preventDefault();
    }

    error_message() { //Message que l'on souhaite afficher en cas d'erreur
        return (<p>Mot de passe incorrect !</p>);
    }

    error_display = () => { //Si le state 'error' est à 'true' on affiche le message d'erreur
        if (this.state.error) {
            return (<div className="error">{this.error_message()}</div>);
        }
        else {
        }
    }

    check_redirect = () => { //Retrourner sur la page d'acceuil si tout est bon
        if (this.state.check) {
            return (
                <Redirect to='/account' />
            );
        }
    }

    render() {
        return (
            <div className='form'>
                {this.check_redirect()}
                <div onSubmit={this.handleSubmit} >
                    <div className='box'>
                        <Form>
                            Tapez votre mot de passe pour authentification
                            <Input
                                type="password"
                                name="password"
                                id="pw"
                                placeholder="Password. . ."
                                value={this.state.mdp}
                                onChange={this.handleChange}
                            />
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