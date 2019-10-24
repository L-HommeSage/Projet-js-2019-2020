import React, { Component } from 'react';
import Card from '../Card/Card.js';
import { getItemLS } from '../Fonctions/Fonctions.js';

class Cards_List extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            getItemLS("cards").map((index) => {
                if (getItemLS("user_log") == index.user_id) {
                    return (
                        <Card id={index.id} four={"#### #### #### " + index.last_four} brand={index.brand} expired_at={index.expired_at} />
                    );
                }
            })

        );
    }
}

export default Cards_List;