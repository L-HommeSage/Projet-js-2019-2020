import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import './Account.css';
import Card from '../Card/Card.js'
import { Link } from 'react-router-dom';

import { bdd } from '../bdd.js';



class Account extends Component {

    constructor(props) {

        super(props);
        this.state = { retrait: 0, depot: 0 };

        bdd.wallets.map((index) => {
            if (localStorage.getItem("id") == index.user_id) {
                this.state = { amount: index.amount };
            }
        });

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
                this.setState({ amount: parseInt(this.state.amount) - parseInt(this.state.retrait) });
                localStorage.setItem("user_amount",parseInt(localStorage.getItem("user_amount")) - parseInt(this.state.retrait) );
            }
        });
        event.preventDefault();
    }

    handleSubmit2(event) {
        bdd.wallets.map((index) => {
            if (localStorage.getItem("id") == index.user_id) {
                this.setState({ amount: parseInt(this.state.amount) + parseInt(this.state.depot) });
                localStorage.setItem("user_amount",parseInt(localStorage.getItem("user_amount")) + parseInt(this.state.depot)  );

            }
        });
        event.preventDefault();
    }

    list_of_cards() {
        return <Card />
    }






    render() {
        return (

            <div className='first'>
                {this.set_amount}

                <div className='panel1'>
                    <div className='amount'>

                        <h1> Balance : {localStorage.getItem("user_amount")} euros.</h1>


                    </div>

                    <div className='cards'>

                        {bdd.Cards.map((index) => {
                            if (localStorage.getItem("id") == index.user_id) {
                                return <div className="cardbox"><div className="blackbar"></div><div className="Card"><Card id={index.id} four={"#### #### #### " + index.last_four} brand={index.brand} expired_at={index.expired_at} /></div></div>
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
                    <div class='box' onSubmit={this.handleSubmit2}>
                        <Form>
                            <h1>Dépots</h1>
                            <Input type="text" name="depot" id="de" placeholder="Montant du dépot. . ." value={this.state.depot} onChange={this.handleChange2} />
                            <br></br>
                            <Button outline color="success">Depôt</Button>
                        </Form>
                    </div>
                    <br></br>
                    <div class='box' onSubmit={this.handleSubmit1}>
                        <Form>
                            <h1>Retrait</h1>
                            <Input type="text" name="retrait" id="re" placeholder="Montant du retrait. . ." value={this.state.retrait} onChange={this.handleChange1} />
                            <br></br>
                            <Button outline color="success">Retrait</Button>
                        </Form>
                    </div>


                </div>
            </div>

        );
    }
}

export default Account;