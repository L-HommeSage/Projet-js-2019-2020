import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Connexion.css';
import '../bdd.js'
import { bdd } from '../bdd.js';


class Connexion extends Component {

    constructor(props) {
        super(props);

        this.state = { mail: '', mdp: '' , check: true};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange1(event) {
        this.setState({ mail: event.target.value });
    }
    handleChange2(event) {
        this.setState({ mdp: event.target.value });
    }

    handleSubmit(event) {

        bdd.users.map((index) => {
            if (index.email == this.state.mail) {
                if (index.password == this.state.mdp) {

                    this.setState({ check:true });
                    localStorage.setItem("id", index.id);
                    alert('Connexion réussie !');
                    

                }
                else { alert('Connexion échouée !'); }
            }
        }

        );

        event.preventDefault();
    }

 

    render() {

        return (
            <div className='form' onSubmit={this.handleSubmit}>
                <Form>
                    <FormGroup>
                        <Label >Email</Label>
                        <Input type="email" name="email" id="em" placeholder="Email adress. . ." value={this.state.mail} onChange={this.handleChange1} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Password</Label>
                        <Input type="password" name="password" id="pw" placeholder="Password. . ." value={this.state.mdp} onChange={this.handleChange2} />
                    </FormGroup>
                    <Button outline color="danger">Connexion</Button>
                </Form>
                
            </div>
        );
    }
}

export default Connexion;
