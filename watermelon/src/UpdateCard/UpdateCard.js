import React, { Component } from 'react';
import { Button, Form, Input, FormGroup } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { setItemLS, getItemLS } from '../Fonctions/Fonctions.js';

class Update_Card extends Component {
    constructor(props) { //Constructeur
        super(props);
        this.state = {
            brand: '',
            lastfour: '',
            date: '',
            error: false
        };

        //Bind des fonctions liées aux évènements
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange1(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ brand: event.target.value });
    }

    handleChange2(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ lastfour: event.target.value });
    }

    handleChange3(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ date: event.target.value });
    }

    handleSubmit(event) { //Actions lorsque l'on soumet une modification de carte
        event.preventDefault();
        let cards = getItemLS("cards"); //On récupère la table d'objets Cards

        if (this.state.lastfour > 9999 || this.state.lastfour < 0 || this.state.lastfour == '' || this.state.brand == '' || this.state.date == '') {
            this.setState({ error: true, check: false });
        }
        else {
            var a = 0;
            let card = { //On crée une nouvelle carte
                id: localStorage.getItem('Up_card'),
                last_four: this.state.lastfour,
                brand: this.state.brand,
                expired_at: this.state.date,
                user_id: localStorage.getItem("user_log")
            }
            cards.map((index) => {
                if (index.id == localStorage.getItem('Up_card')) { //On récupère l'indice de la carte qui doit être modifiée
                    cards[a] = card; //On la remplace
                }
                else {
                    a++;
                }
            }
            );
            setItemLS("cards", cards); //On sauvegarde la modification dans le LocalStorage
            this.setState({ check: true });
        }
    }

    check_redirect = () => {  //Retrourner sur la page d'acceuil si tout est bon
        if (this.state.check) {
            return (
                <Redirect to='/account' />
            );
        }
    }

    error_message() { //Message que l'on souhaite afficher en cas d'erreur
        return (<p>Un des champs est vide ou incorrect. Nous vous rappelons qu'il ne faut saisir que les 4 derniers numéro de votre carte et la date d'expiration doit etre supérieur à la date d'aujourd'hui</p>);
    }

    error_display = () => {  //Si le state 'error' est à 'true' on affiche le message d'erreur
        if (this.state.error) {
            return (<div className="error">{this.error_message()}</div>);
        }
        else {
        }
    }

    render() {
        return (
            <div className='form'  >
                {this.check_redirect()}
                <div class='box' onSubmit={this.handleSubmit}>
                    <Form>
                        <h1>Modifier votre carte</h1>
                        <FormGroup>
                            <Input
                                type="text"
                                name="marque"
                                id="d"
                                placeholder="Marque. . ."
                                value={this.state.brand}
                                onChange={this.handleChange1}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="number"
                                name="lastfour"
                                id="lf"
                                placeholder="Numéro. . ."
                                value={this.state.lastfour}
                                onChange={this.handleChange2}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="date"
                                name="Date"
                                id="d"
                                placeholder="Date. . ."
                                value={this.state.date}
                                onChange={this.handleChange3}
                            />
                        </FormGroup>
                        <div>
                            <Button outline color="success">Ajouter la carte</Button>
                        </div>
                    </Form>
                </div>
                {this.error_display()}

            </div>
        );
    }
}
export default Update_Card;