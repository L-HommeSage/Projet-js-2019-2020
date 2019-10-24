import React, { Component } from 'react';
import { Button, Form, Input, FormGroup } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { setItemLS, getItemLS } from '../Fonctions/Fonctions.js';



class AddCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            brand: '',
            lastfour: '',
            date: '',
            error: false
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange1(event) {
        this.setState({ brand: event.target.value });
    }

    handleChange2(event) {
        this.setState({ lastfour: event.target.value });
    }

    handleChange3(event) {
        this.setState({ date: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const a =getItemLS("cards").length;
        let cards = getItemLS("cards");

        if(this.state.lastfour>9999 || this.state.lastfour<0 || this.state.lastfour == '' || this.state.brand == ''|| this.state.date=='')
        {
            this.setState({error : true, check : false});
        }
        else{
            let card = {
                id: parseInt(a + 1),
                last_four: this.state.lastfour,
                brand: this.state.brand,
                expired_at: this.state.date,
                user_id: localStorage.getItem("user_log")
            }
    
            cards.push(card);
    
            setItemLS("cards", cards);
            this.setState({check : true});
        }
        

        


    }

    check_redirect = () => {
        if (this.state.check) {
            return (
                <Redirect to='/account' />
            );
        }
    }
    error_message() {
        return (<p>Un des champs est vide ou incorrect. Nous vous rappelons qu'il ne faut saisir que les 4 derniers numéro de votre carte et la date d'expiration doit etre supérieur à la date d'aujourd'hui</p>);
    }
    error_display = () => {
        if (this.state.error) {
            return (<div className="error">{this.error_message()}</div>);
        }
        else {

        }
    }
    render() {
        return (
            <div className='form'  >
                {this.check_redirect()}
                <div class='box' onSubmit={this.handleSubmit}>
                    <Form>
                        <h1>Nouvelle carte</h1>
                        <FormGroup>
                            <Input type="text" name="marque" id="d" placeholder="Marque. . ." value={this.state.brand} onChange={this.handleChange1} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" name="lastfour" id="lf" placeholder="Numéro. . ." value={this.state.lastfour} onChange={this.handleChange2} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="date" name="Date" id="d" placeholder="Date. . ." value={this.state.date} onChange={this.handleChange3} />
                        </FormGroup>
                        <div>
                            <Button outline color="success">Ajouter la carte</Button>
                        </div>
                    </Form>
                </div>
                {this.error_display()}

            </div>
        );
    }
}
export default AddCard;