import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import { bdd } from '../bdd.js';



class Virement extends Component {
    constructor(props) {
        super(props);
        this.state = { mail: '', montant: '' };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange1(event) {
        this.setState({ mail: event.target.value });
    }

    handleChange2(event) {
        this.setState({ montant: event.target.value });
    }

    handleSubmit(event) {
        bdd.users.map((index) => {
            if (index.email == this.state.mail) {
                bdd.wallets.map((index2) => {
                    if (index2.user_id == index.id) {
                        console.log(index2.id);
                    }
                });
            }
        });
    }


    render() {
        return (
            <div className='form2' onSubmit={this.handleSubmit} >
                <div class='box2'>
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
            </div>
        );
    }
}

export default Virement;