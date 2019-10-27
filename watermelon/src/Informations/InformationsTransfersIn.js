import React, { Component } from 'react';
import './Informations.css';
import { getItemLS } from '../Fonctions/Fonctions.js';


class InformationsTransfersIn extends Component {

    constructor(props) { //Constructeur
        super(props);
        this.get_Debitted_Guy = this.get_Debitted_Guy.bind(this);
    }

    get_Debitted_Guy(debitted_wallet_id) { //On cherche les informations de celui qui a fait un virement à l'utilisateur connecté
        var fn, ln;
        getItemLS("users").map((index) => {
            if (index.id == debitted_wallet_id) {
                fn = index.first_name;
                ln = index.last_name
            }
        })
        return (<span> {fn} {ln} </span>);
    }

    render() {
        return (
            getItemLS("transfers").map((index) => {
                if (getItemLS("user_log") == index.credited_wallet_id) {
                    return (
                        <div>
                            <div>
                                Envoyeur : {this.get_Debitted_Guy(index.debitted_wallet_id)}
                            </div>
                            <div>
                                Montant : {index.amount} euros.
                            </div>
                            <br />
                        </div>
                    );

                }
            })
        )
    }
}

export default InformationsTransfersIn;