import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { setItemLS, getItemLS } from '../Fonctions/Fonctions.js';

class UpdateUser extends Component {

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

    handleChange1(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ fn: event.target.value });
    }
    handleChange2(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ sn: event.target.value });
    }
    handleChange3(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ em: event.target.value });
    }
    handleChange4(event) { //Toujours mettre à jour le state en fonction du champs remplis
        this.setState({ pw: event.target.value });
    }

    handleSubmit(event) { //Actions lorsque l'on soumet une modification d'utilisateur'
        event.preventDefault();
        let users = getItemLS("users"); //On récupère la table d'objets d'utilisateurs
        var a = 0;

        if (this.state.fn != '' && this.state.sn != '' && this.state.em != '' && this.state.pw != '') {
            let user = { //On crée un nouvel utilisateur
                id: getItemLS("user_log"),
                first_name: this.state.fn,
                last_name: this.state.sn,
                email: this.state.em,
                password: this.state.pw,
                is_admin: 0
            }

            users.map((index) => { //On récupère l'id de l'utilisateur à modifier
                if (index.id == getItemLS("user_log")) {
                    users[a] = user; //On le met à jour
                }
                else {
                    a++;
                }
            }
            );

            setItemLS("users", users); //On sauvegarde la modification dans le LocalStorage
            this.setState({ check: true });
        }
        else {
            this.setState({ error: true })
        }
    }

    error_message() { //Message que l'on souhaite afficher en cas d'erreur
        return (<p>Un des champs est vide ou incorrect !</p>);
    }

    error_display = () => { //Si le state 'error' est à 'true' on affiche le message d'erreur
        if (this.state.error) {
            return (<div className="error">{this.error_message()}</div>);
        }
        else {
        }
    }

    check_redirect = () => { //Retrourner sur la page d'acceuil si tout est bon
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
                        <h1>Modifer vos infomations</h1>
                        <FormGroup>
                            <Input
                                type="text"
                                name="fname"
                                id="fn"
                                placeholder="First name. . ."
                                value={this.state.fn}
                                onChange={this.handleChange1}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="sname"
                                id="sn"
                                placeholder="Last name. . ."
                                value={this.state.sn}
                                onChange={this.handleChange2}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Email adress. . ."
                                value={this.state.em}
                                onChange={this.handleChange3}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="password"
                                name="password"
                                id="pw"
                                placeholder="Password. . ."
                                value={this.state.pw}
                                onChange={this.handleChange4}
                            />
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
export default UpdateUser