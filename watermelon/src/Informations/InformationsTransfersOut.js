import React, { Component } from 'react';
import './Informations.css';
import { getItemLS } from '../Fonctions/Fonctions.js';

class InformationsTransfersOut extends Component {
    constructor(props) { //Constructeur
        super(props);

        //Bind des fonctions liées aux évènements
        this.get_Credited_Guy = this.get_Credited_Guy.bind(this);
        this.getWalletId = this.getWalletId.bind(this);
    }

    get_Credited_Guy(credited_wallet_id) { //On cherche les informations de celui qui a reçu un virement de l'utilisateur connecté
        var fn, ln;
        getItemLS("users").map((index) => {
            if (index.id == credited_wallet_id) {
                fn = index.first_name;
                ln = index.last_name
            }
        })
        return (<span> {fn} {ln} </span>);
    }

    getWalletId() { //Recupérer l'id du wallet de l'utilisateur connecté afin d'acceder à ses payins
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
                    if (getItemLS("user_log") == index.debitted_wallet_id) {
                        return (
                            <div>
                                <div>
                                    Destinataire : {this.get_Credited_Guy(index.credited_wallet_id)}
                                </div>
                                <div>
                                    Montant : {index.amount} euros.
                            </div>
                                <br />
                            </div>
                        );

                    }
                })}
                {getItemLS("payouts").map((index) => {
                    if (index.wallet_id == this.getWalletId()) {
                        return (
                            <div style={{ backgroundColor: "red", padding: 5, borderRadius: 5 }}>
                                Montant du retrait : {index.amount} euros.
                            </div>
                        )
                    }
                })
                }
            </div>
        )
    }
}

export default InformationsTransfersOut;