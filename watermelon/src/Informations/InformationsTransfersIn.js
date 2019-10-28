import React, { Component } from 'react';
import './Informations.css';
import { getItemLS } from '../Fonctions/Fonctions.js';

class InformationsTransfersIn extends Component {
    constructor(props) { //Constructeur
        super(props);

        //Bind des fonctions liées aux évènements
        this.get_Debitted_Guy = this.get_Debitted_Guy.bind(this);
        this.getWalletId = this.getWalletId.bind(this);
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

    getWalletId() { //Recupérer l'id du wallet de l'utilisateur connecté afin d'acceder à ses payouts
        var wallet_id;
        getItemLS("wallets").map((index) => {
            if (getItemLS("user_log") == index.user_id) {
                wallet_id = index.id;
            }
        })
        return wallet_id;
    }

    render() {
        return (
            <div>
                {getItemLS("transfers").map((index) => {
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
                })}
                {getItemLS("payins").map((index) => {
                    if (index.wallet_id == this.getWalletId()) {
                        return (
                            <div style={{ backgroundColor: "lightgreen", padding: 5, borderRadius: 5 }}>
                                Montant du dépôt : {index.amount} euros.
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default InformationsTransfersIn;