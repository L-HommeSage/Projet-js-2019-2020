import React, { Component } from 'react';
import Card from '../Card/Card.js';
import { getItemLS } from '../Fonctions/Fonctions.js';

class CardsList extends Component {

    constructor(props) { //Constructeur
        super(props);
    }

    render() {
        return (
            getItemLS("cards").map((index) => { //Pour toutes les cartes apparentenant à l'utilisateur connecté, on les affiche
                if (getItemLS("user_log") == index.user_id) {
                    return ( //On passe les informations grâce aux properties
                        <Card
                            id={index.id}
                            four={"#### #### " + index.last_four}
                            brand={index.brand}
                            expired_at={index.expired_at}
                        />
                    );
                }
            })
        );
    }
}
export default CardsList;