import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Account.css';

import { data, bdd } from '../bdd.js';
import { isTemplateElement } from '@babel/types';

class Account extends Component {

    constructor(props) {

        super(props);
        this.state = { amount: 0, retrait: 0, depot: 0 };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);


    };

    handleChange1(event) {
        this.setState({ retrait: event.target.value });
    }

    handleChange2(event) {
        this.setState({ depot: event.target.value });
    }

    handleSubmit1(event) {
        bdd.wallets.map((index) => {
            if (localStorage.getItem("id") == index.user_id) {
                index.amount -= this.state.retrait;
            }
        });
        event.preventDefault();
    }

    handleSubmit2(event) {
        bdd.wallets.map((index) => {
            if (localStorage.getItem("id") == index.user_id) {
                index.amount = parseInt(index.amount)+ parseInt(this.state.depot);
                console.log(index.amount);
            }
        });
        event.preventDefault();
    }

    set_amount = () => {

        var am = "";
        bdd.wallets.map((index) => {
            if (localStorage.getItem("id") == index.user_id) {
                am += index.amount;
            }
        });
        return am;

    }



    render() {
        return (

            <div className='first'>


                <div className='panel1'>
                    <div className='amount'>

                        <h1> Le montant que vous possédez sur votre compte est : {this.set_amount()} euros.</h1>

                    </div>
                    <div className='cards'></div>
                </div>

                <div className='panel2'>
                    <div class='deposit' onSubmit={this.handleSubmit2}>
                        <Form>
                            <Input type="text" name="depot" id="de" placeholder="Montant du dépot. . ." value={this.state.depot} onChange={this.handleChange2} />
                            <Button outline color="success">Depôt</Button>
                        </Form>
                    </div>
                    <br></br>
                    <div class='withdraw' onSubmit={this.handleSubmit1}>
                        <Form>
                            <Input type="text" name="retrait" id="re" placeholder="Montant du retrait. . ." value={this.state.retrait} onChange={this.handleChange1} />
                            <Button outline color="success">Retrait</Button>
                        </Form>
                    </div>

                </div>
            </div>

        );
    }
}

export default Account;