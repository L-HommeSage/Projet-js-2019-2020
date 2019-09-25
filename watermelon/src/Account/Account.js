import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Account.css';

class Account extends Component {

    constructor(props) {

        super(props);

    };


    render() {

        return (

            <div className = 'first'>

                <div className = 'panel1'>

                    <div className = 'amount'></div>
                    <div className = 'cards'></div>

                </div>

                <div className = 'panel2'>
                <div class='deposit'>
                            <Button outline color="success">Deposit</Button>
                        </div>
                        <div class='withdraw'>
                            <Button outline color="success">Withdraw</Button>
                        </div>
                
                </div>
            </div>
           
                );
            }
        }
        
export default Account;