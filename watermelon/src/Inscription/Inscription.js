import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { getItemLS } from '../Fonctions/Fonctions.js';
import './Inscription.css';
import { setItemLS } from '../Fonctions/Fonctions.js'

class Inscription extends Component {
    constructor(props) { //Constructeur
        super(props);
        this.state = {
            fn: '',
            sn: '',
            em: '',
            pw: '',
            error: false
        };

        //Bind des fonctions liées aux évènements
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange1(event) {
        this.setState({ fn: event.target.value });
    }
    handleChange2(event) {
        this.setState({ sn: event.target.value });
    }
    handleChange3(event) {
        this.setState({ em: event.target.value });
    }
    handleChange4(event) {
        this.setState({ pw: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const a = getItemLS("users").length;
        const b = getItemLS("wallets").length;
        let users = getItemLS("users");
        let wallets = getItemLS("wallets");

        if (this.state.fn != '' && this.state.sn != '' && this.state.em != '' && this.state.pw != '') {
            let user = { //On crée un nouvel user
                id: parseInt(a + 1),
                first_name: this.state.fn,
                last_name: this.state.sn,
                email: this.state.em,
                password: this.state.pw,
                is_admin: 0
            }
            let wallet = { //Un wallet associé
                id: parseInt(b + 1),
                user_id: parseInt(a + 1),
                balance: 0,
            }

            //On les ajoute à la table d'objets users et wallets
            users.push(user);
            wallets.push(wallet);

            //On sauveguarde l'ajout dans le LocalStorage
            setItemLS("users", users);
            setItemLS("wallets", wallets);
            setItemLS("user_log", parseInt(a + 1));

            this.setState({ check: true });
        }
        else {
            this.setState({ error: true });
        }

    }

    error_message() { //Message que l'on souhaite afficher en cas d'erreur
        return (<p>Un des champs est vide ou incorrect !</p>);
    }

    error_display = () => { //Si le state 'error' est à 'true' on affiche le message d'erreur
        if (this.state.error) {
            if (this.state.error) {
                return (<div className="error">{this.error_message()}</div>);
            }
        }
    }

    check_redirect = () => { //Si tout est bon, on se dirige vers la page account
        if (this.state.check) {
            return (
                <Redirect to='/account' />
            );
        }
    }

    render() {

        return (
            <div className='form' onSubmit={this.handleSubmit}>
                {this.check_redirect()}
                <div className='box'>
                    <Form>
                        <h1>Sign-in</h1>
                        <FormGroup>
                            <Input type="text" name="fname" id="fn" placeholder="First name. . ." value={this.state.fn} onChange={this.handleChange1} />
                        </FormGroup>

                        <FormGroup>
                            <Input type="text" name="sname" id="sn" placeholder="Last name. . ." value={this.state.sn} onChange={this.handleChange2} />
                        </FormGroup>

                        <FormGroup>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email adress. . ." value={this.state.em} onChange={this.handleChange3} />
                        </FormGroup>

                        <FormGroup>
                            <Input type="password" name="password" id="pw" placeholder="Password. . ." value={this.state.pw} onChange={this.handleChange4} />
                        </FormGroup>
                        <div>
                            <Button outline color="success">Inscription</Button>
                        </div>
                    </Form>
                </div>
                {this.error_display()}
            </div>
        );
    }
}
export default Inscription;