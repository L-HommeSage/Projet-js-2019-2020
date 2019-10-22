import React, { Component } from 'react';
import './Informations.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';





class Informations extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="background">


                <div className="panelTransfert">
                    <h1> Historique des transferts :</h1>
                    <div className="boxEnvoyé">
                        <h2>Envoyés : </h2>
                        {JSON.parse(localStorage.getItem("transfers")).map((index) => {
                            if (localStorage.getItem("user_log") == index.debitted_wallet_id) {
                                return (
                                    <div>
                                        <div>
                                            Destinataire : {JSON.parse(localStorage.getItem("users")).map((index2) => {
                                                if (index.credited_wallet_id == index2.id) {
                                                    return (<span> {index2.first_name} {index2.last_name} </span>);
                                                }

                                            })}
                                        </div>
                                        <div>
                                            Montant : {index.amount} euros.
                                </div>
                                        <br></br>
                                    </div>
                                );

                            }
                        })}
                    </div>

                    <div className="boxrecus">
                        <h2>Recus : </h2>
                        {JSON.parse(localStorage.getItem("transfers")).map((index) => {
                            if (localStorage.getItem("user_log") == index.credited_wallet_id) {
                                return (
                                    <div>
                                        <div>
                                            Envoyeur : {JSON.parse(localStorage.getItem("users")).map((index2) => {
                                                if (index.debitted_wallet_id == index2.id) {
                                                    return (<span> {index2.first_name} {index2.last_name} </span>);
                                                }

                                            })}
                                        </div>
                                        <div>
                                            Montant : {index.amount} euros.
                                </div>
                                        <br></br>
                                    </div>
                                );

                            }
                        })}
                    </div>
                </div>
                <div className="panelInfo">
                    <div className="boxinfo">
                        <h1>Informations Générales</h1>
                        <p>First Name : {JSON.parse(localStorage.getItem("users")).map((index) => {
                            if (localStorage.getItem("user_log") == index.id) {
                                return index.first_name;
                            }
                        })} </p>
                        <p> Last Name :  {JSON.parse(localStorage.getItem("users")).map((index) => {
                            if (localStorage.getItem("user_log") == index.id) {
                                return index.last_name;
                            }
                        })}</p>
                        <p> Email : {JSON.parse(localStorage.getItem("users")).map((index) => {
                            if (localStorage.getItem("user_log") == index.id) {
                                return index.email;
                            }
                        })} </p>

                        <p> Balance : {JSON.parse(localStorage.getItem("wallets")).map((index) => {
                            if (localStorage.getItem("user_log") == index.user_id) {
                                return index.balance;
                            }
                        })} euros</p>
                        <Link to='/Update_user'>
                            <Button >Modifier</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Informations;