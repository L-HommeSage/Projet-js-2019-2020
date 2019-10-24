import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './Virement.css';
import { setItemLS, getItemLS } from '../Fonctions/Fonctions.js';




class Virement extends Component {
    constructor(props) {
        super(props);
        this.state = { mail: '', amount: '', check: false, error: false };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange1(event) {
        this.setState({ mail: event.target.value });
    }

    handleChange2(event) {
        this.setState({ amount: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();

        const a = getItemLS("transfers").length;
        let users = getItemLS("users");
        let wallets = getItemLS("wallets");
        let transfers = getItemLS("transfers");
        var creditted_guy = -1;
        var amount_debitted_guy;

        getItemLS("users").map((index) => {
            if (index.email == this.state.mail) {
                creditted_guy = index.id;
            }
        });
        getItemLS("wallets").map((index) => {
            if (index.user_id == getItemLS("user_log")) {
                amount_debitted_guy = index.balance;
            }
        });

        if (this.state.amount > amount_debitted_guy || creditted_guy == -1) {
            this.setState({ error: true });
        }
        else {
            let transfer = {
                id: parseInt(a + 1),
                debitted_wallet_id: parseInt(localStorage.getItem("user_log")),
                credited_wallet_id: creditted_guy,
                amount: this.state.amount
            }

            transfers.push(transfer);
            setItemLS("transfers", transfers);

            users.map((index) => {
                if (index.email == this.state.mail) {
                    wallets[parseInt(index.id - 1)].balance = parseInt(wallets[parseInt(index.id - 1)].balance) + parseInt(this.state.amount);
                    wallets[parseInt(getItemLS("user_log") - 1)].balance = parseInt(wallets[parseInt(getItemLS("user_log") - 1)].balance) - parseInt(this.state.amount)
                    this.setState({ check: true });
                }
            });
            setItemLS("wallets", wallets);
        }
    }

    check_redirect = () => {
        if (this.state.check) {
            return (
                <Redirect to='/account' />
            );
        }

    }

    error_message() {
        return (
            <div>
                <p>Un des champs est vide ou incorrect.</p>
                <p>Vérifier bien l'email du destinataire ainsi que le montant que vous posséder sur votre compte !</p>
            </div>

        )
    }
    
    error_display = () => {
        if (this.state.error) {
            return (<div className='error'>{this.error_message()}</div>);
        }
        else {

        }
    }

    render() {
        return (
            <div className='form' onSubmit={this.handleSubmit} >
                {this.check_redirect()}
                <div class='box'>
                    <Form>
                        <h1>Virement</h1>
                        <FormGroup>
                            <Input type="text" name="email" id="exampleEmail" placeholder="Email du destinataire. . ." value={this.state.mail} onChange={this.handleChange1} />
                        </FormGroup>

                        <FormGroup>
                            <Input type="text" name="montant" id="mont" placeholder="montant du transfert. . ." value={this.state.montant} onChange={this.handleChange2} />
                        </FormGroup>
                        <div>
                            <Button outline color="success">Faire le virement</Button>
                        </div>
                    </Form>
                </div>
                {this.error_display()}
            </div>
        );
    }
}

export default Virement;