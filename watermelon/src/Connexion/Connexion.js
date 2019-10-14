import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './Connexion.css';



class Connexion extends Component {

    constructor(props) {
        super(props);

        this.state = { mail: '', mdp: '', check: false };

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
        JSON.parse(localStorage.getItem("users")).map((index) => {
            if (index.email === this.state.mail) {
                if (index.password === this.state.mdp) {
                    this.setState({ check: true });
                    localStorage.setItem("user_log", index.id);
                }
            }
        });

        
    event.preventDefault();
    }

    check_redirect = () => {
        if (this.state.check) {
            return (
                <Redirect to='/account' />
            );
        }

    }





    render() {

        return (
            <div className='form2' onSubmit={this.handleSubmit} >
                {this.check_redirect()}
                <div class='box2'>
                    <Form>
                        <h1>Connexion</h1>
                        <FormGroup>
                            
                            <Input type="email" name="email" id="em" placeholder="Email adress. . ." value={this.state.mail} onChange={this.handleChange1} />
                        </FormGroup>
                        <FormGroup>
                            
                            <Input type="password" name="password" id="pw" placeholder="Password. . ." value={this.state.mdp} onChange={this.handleChange2} />
                        </FormGroup>
                        <div>
                            <Button outline color="success">Connexion</Button>
                        </div>
                    </Form>
                </div>

            </div>
        );
    }
}

export default Connexion;
