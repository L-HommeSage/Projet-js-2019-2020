import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { setItemLS, getItemLS } from '../Fonctions/Fonctions.js';
import './Cards.css';








class Card extends Component {
    constructor(props) { //Constructeur
        super(props);
        this.state = { id: props.id, four: props.four, brand: props.brand, expired_at: props.expired_at };
    }

    authentification = () => { //Si l'on veut supprimer une carte, on sauvegarde son id
        setItemLS("del_card", this.state.id);
    }

    Update = () => { //Si l'on veut modifer une carte, on sauvegarde son id
        setItemLS("Up_card", this.state.id);
    }

    render() {
        return (
            <div className="cardbox">
                <div className="blackbar"></div>
                <div className="Card">
                    <div> Id : {this.state.id} </div>
                    <div>Last Four Number : {this.state.four}  </div>
                    <div>Brand : {this.state.brand} </div>
                    <div>Expired_at : {this.state.expired_at} </div>
                    <div className='space'>
                        <Link to='/authentification'>
                            <Button color='danger' onClick={this.authentification} >Supprimer</Button>
                        </Link>
                        <Link to='/Update_card'>
                            <Button color='success' onClick={this.Update} >Modifier</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
};
export default Card;