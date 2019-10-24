import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import './Account.css';
import { Link } from 'react-router-dom';
import { setItemLS, getItemLS, getBalance } from '../Fonctions/Fonctions.js';
import Cards_List from '../Cards_List/Cards_List.js'


class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balance: getBalance(getItemLS("user_log")),
            error: false,
            payin: 0,
            payout: 0,
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    };

    handleChange1(event) {
        this.setState({ payin: event.target.value });
    }

    handleChange2(event) {
        this.setState({ payout: event.target.value });
    }
    handleSubmit1(event) {
        let bool = true;
        getItemLS("cards").map((index) => {
            if (getItemLS("user_log") == index.user_id) {
                bool = false;
            }
        });
        if (this.state.payin == '') {
            bool = true;
        }
        if (bool == false) {
            let wallets = getItemLS("wallets");

            this.setState({ error: false });
            wallets[parseInt(getItemLS("user_log") - 1)].balance = parseInt(wallets[getItemLS("user_log") - 1].balance) + parseInt(this.state.payin);
            setItemLS("wallets", wallets);

            this.setState({ balance: wallets[parseInt(getItemLS("user_log") - 1)].balance })
        }
        else {
            this.setState({ error: true });
        }
        event.preventDefault();
    }


    handleSubmit2(event) {
        let bool = true;

        getItemLS("cards").map((index) => {
            if (getItemLS("user_log") == index.user_id) {
                bool = false;
            }
        });
        if (this.state.payout == '') {
            bool = true;
        }
        if (bool == false) {
            this.setState({ error: false });
            let wallets = getItemLS("wallets");
            wallets[parseInt(localStorage.getItem("user_log") - 1)].balance = parseInt(wallets[getItemLS("user_log") - 1].balance) - parseInt(this.state.payout);
            setItemLS("wallets", wallets);

            this.setState({ balance: wallets[parseInt(localStorage.getItem("user_log") - 1)].balance })

        }
        else {
            this.setState({ error: true });
        }
        event.preventDefault();
    }

    error_message() {
        return (<p>Vous ne pouvez pas effectuer cette opération !!!z</p>);
    }

    error_display = () => {
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
                        <h1> Balance : {this.state.balance}  euros.</h1>
                    </div>
                    <div className='cards'>
                        <Cards_List />
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
                        <Form>
                            <h1>Payin</h1>
                            <Input type="number" name="payin" id="de" placeholder="Montant du payin. . ." value={this.state.payin} onChange={this.handleChange1} />
                            <br></br>
                            <Button outline color="success">Submit</Button>
                        </Form>
                    </div>
                    <br></br>
                    <div className='box' onSubmit={this.handleSubmit2} >
                        <Form >
                            <h1>payout</h1>
                            <Input type="number" name="payout" id="re" placeholder="Montant du payout. . ." value={this.state.payout} onChange={this.handleChange2} />
                            <br></br>
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
