import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import './Account.css';
import { Link } from 'react-router-dom';
import { setItemLS, getItemLS, getBalance } from '../Fonctions/Fonctions.js';
import CardsList from '../CardsList/CardsList.js'


class Account extends Component {
    constructor(props) { //Constructeur
        super(props);
        this.state = { 
            balance: getBalance(getItemLS("user_log")),
            error: false,
            payin: 0,
            payout: 0,
        };

        //Bind des fonctions liées aux évènements
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    };

    handleChange1(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ payin: event.target.value });
    }

    handleChange2(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ payout: event.target.value });
    }

    handleSubmit1(event) { //Actions lorsque l'on fait un dépôt
        let bool = true; //Booléen de véririfcation
        getItemLS("cards").map((index) => { //L'utilisateur possède-t-il au moins une carte pour faire un dépot
            if (getItemLS("user_log") == index.user_id) {
                bool = false;
            }
        });

        if (this.state.payin == '') { //Le champs est-il bien remplis ?
            bool = true;
        }

        if (bool == false) { //Si tout est bon
            let wallets = getItemLS("wallets"); //On récupère la table d'objets wallets
            wallets[parseInt(getItemLS("user_log") - 1)].balance = parseInt(wallets[getItemLS("user_log") - 1].balance) + parseInt(this.state.payin); //On la met à jour
            setItemLS("wallets", wallets); //On sauvegarde la modification dans le LocalStorage

            this.setState({ error: false });
            this.setState({ balance: wallets[parseInt(getItemLS("user_log") - 1)].balance }) //Mise à jour pour affichage
        }
        else {
            this.setState({ error: true });
        }

        event.preventDefault();
    }


    handleSubmit2(event) { //Actions lorsque l'on fait un retrait
        let bool = true;//Booléen de véririfcation
        let wallets = getItemLS("wallets"); 
        getItemLS("cards").map((index) => { //L'utilisateur possède-t-il au moins une carte pour faire un retrait
            if (getItemLS("user_log") == index.user_id) {
                bool = false;
            }
        });

        if (this.state.payout == ''  ) { //Le champs est-il bien remplis ?
            bool = true;
        };

        if (this.state.payout > parseInt(wallets[getItemLS("user_log") - 1].balance))
        {
            bool = true;

        }

        if (bool == false) { //Si tout est bon
            let wallets = getItemLS("wallets"); //On récupère la table d'objets wallets
            wallets[parseInt(localStorage.getItem("user_log") - 1)].balance = parseInt(wallets[getItemLS("user_log") - 1].balance) - parseInt(this.state.payout); //On la met à jour
            setItemLS("wallets", wallets); //On sauvegarde la modification dans le LocalStorage

            this.setState({ error: false });
            this.setState({ balance: wallets[parseInt(localStorage.getItem("user_log") - 1)].balance }); //Mise à jour pour affichage

        }
        else {
            this.setState({ error: true });
        }

        event.preventDefault();
    }

    error_message() { //Message que l'on souhaite afficher en cas d'erreur
        return (<p>Vous ne pouvez pas effectuer cette opération !</p>);
    }

    error_display = () => { //Si le state 'error' est à 'true' on affiche le message d'erreur
        if (this.state.error) {
            return (<div className="error">{this.error_message()}</div>);
        }
        else {

        }
    }

    render() {
        return (
            <div className='first'>
                <div className='panel1'>
                    <div className='amount'>
                        <h1> Balance : {this.state.balance}  euros.</h1> {/*Affichage en temps réel de la balance du compte*/}
                    </div>
                    <div className='cards'>
                        <CardsList /> {/*Affichage en temps réel de la liste de nos cartes*/}
                        <div className="cardbox">
                            <Link to='/addCard'>
                                <Button outline color="success" onClick={this.add_Card}>
                                    Ajouter une nouvelle carte
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='panel2'>
                    <div className='box' onSubmit={this.handleSubmit1}>
                        <Form> {/*Formulaire pour dépos*/}
                            <h1>Payin</h1>
                            <Input
                                type="number"
                                name="payin"
                                id="de"
                                placeholder="Montant du payin. . ."
                                value={this.state.payin}
                                onChange={this.handleChange1}
                            />
                            <br />
                            <Button outline color="success">Submit</Button>
                        </Form>
                    </div>
                    <br></br>
                    <div className='box' onSubmit={this.handleSubmit2} >
                        <Form > {/*Formulaire pour retrait*/}
                            <h1>payout</h1>
                            <Input
                                type="number"
                                name="payout"
                                id="re"
                                placeholder="Montant du payout. . ."
                                value={this.state.payout}
                                onChange={this.handleChange2}
                            />
                            <br />
                            <Button outline color="success">Submit</Button>
                        </Form>
                    </div>
                    {this.error_display()}
                </div>
            </div>
        );
    }
}
export default Account;
