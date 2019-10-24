import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Cards.css';








class Card extends Component {

    constructor(props) {

        super(props);
        this.state = { id: props.id, four: props.four, brand: props.brand, expired_at: props.expired_at };

    }

    authentification = () => {
        localStorage.setItem('del_card', this.state.id);
    }
    Update = () => {
        localStorage.setItem('Up_card', this.state.id);
    }


    render() {
        return (
            <div className="cardbox">
                <div className="blackbar"></div>
                <div className="Card">
                    <div> id : {this.state.id} </div>
                    <div>last_four: {this.state.four}  </div>
                    <div>brand : {this.state.brand} </div>
                    <div>expired_at : {this.state.expired_at} </div>
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