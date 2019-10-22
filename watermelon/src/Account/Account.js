import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import './Account.css';
import Card from '../Card/Card.js'
import { Link } from 'react-router-dom';

class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balance:
                JSON.parse(localStorage.getItem("wallets")).map((index) => {
                    if (localStorage.getItem("user_log") == index.user_id) {
                        return index.balance;
                    }
                }),
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
        event.preventDefault();

        let wallets = JSON.parse(localStorage.getItem("wallets"));
        wallets[parseInt(localStorage.getItem("user_log") - 1)].balance = parseInt(wallets[localStorage.getItem("user_log") - 1].balance) + parseInt(this.state.payin);
        localStorage.setItem("wallets", JSON.stringify(wallets));

        this.setState({ balance: wallets[parseInt(localStorage.getItem("user_log") - 1)].balance });
    }

    handleSubmit2(event) {
        event.preventDefault();
        let wallets = JSON.parse(localStorage.getItem("wallets"));
        wallets[parseInt(localStorage.getItem("user_log") - 1)].balance = parseInt(wallets[localStorage.getItem("user_log") - 1].balance) - parseInt(this.state.payout);
        localStorage.setItem("wallets", JSON.stringify(wallets));


        this.setState({ balance: wallets[parseInt(localStorage.getItem("user_log") - 1)].balance });
    }

    render() {
        return (

            <div className='first'>
                <div className='panel1'>
                    <div className='amount'>
                        <h1> Balance : {this.state.balance}  euros.</h1>
                    </div>

                    <div className='cards'>
                        {JSON.parse(localStorage.getItem("cards")).map((index) => {
                            if (localStorage.getItem("user_log") == index.user_id) {
                                return <div className="cardbox">
                                    <div className="blackbar">
                                    </div>
                                    <div className="Card">
                                        <Card id={index.id} four={"#### #### #### " + index.last_four} brand={index.brand} expired_at={index.expired_at} />
                                    </div>
                                </div>
                            }
                        })}
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
                            <Input type="text" name="payin" id="de" placeholder="Montant du payin. . ." value={this.state.payin} onChange={this.handleChange1} />
                            <br></br>
                            <Button outline color="success">Submit</Button>
                        </Form>
                    </div>
                    <br></br>
                    <div className='box' onSubmit={this.handleSubmit2} >
                        <Form >
                            <h1>payout</h1>
                            <Input type="text" name="payout" id="re" placeholder="Montant du payout. . ." value={this.state.payout} onChange={this.handleChange2} />
                            <br></br>
                            <Button outline color="success">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>


        );
    }
}

export default Account;