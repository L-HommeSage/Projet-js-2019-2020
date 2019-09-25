import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Account.css';

import { data } from '../bdd.js';

class Account extends Component {

    constructor(props) {

        super(props);

    };

    getAmount() {
        const item = data.find(wallets => wallets.user_id == localStorage.getItem("id"));
                return item;
         }
    
    

    render() {
        return (
            <div className='first'>
                <div className='panel1'>
                    <div className='amount'>
                        <h1>
                            {this.getAmount()}
                        </h1>
                    </div>
                    <div className='cards'>test</div>
                </div>

                <div className='panel2'>
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