import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation.js';
import Homepage from './Homepage/Homepage.js';
import Inscription from './Inscription/Inscription.js';
import Connexion from './Connexion/Connexion.js';
import Virement from './Virement/Virement.js';
import Account from './Account/Account.js';
import Navigation2 from './Navigation2/Navigation2.js';
import AddCard from './AddCard/AddCard.js';
import Informations from './Informations/Informations.js';
import Authentification from './Authentification/Authentification.js';
import UpdateCard from './UpdateCard/UpdateCard.js';
import UpdateUser from './UpdateUser/UpdateUser.js';

import Data_users from './Bdd/Data_users';
import Data_cards from './Bdd/Data_cards';
import Data_payins from './Bdd/Data_payins';
import Data_payouts from './Bdd/Data_payouts';
import Data_transfers from './Bdd/Data_transfers';
import Data_wallets from './Bdd/Data_wallets';

import { setItemLS } from './Fonctions/Fonctions.js';

import './App.css';

class App extends Component {


    load_bdd() { //On récupère toutes les informations exportées dans les différent fichiers et on les set dans le LocalSotrage
        setItemLS("users", Data_users.Data_users);
        setItemLS("cards", Data_cards.Data_cards);
        setItemLS("payins", Data_payins.Data_payins);
        setItemLS("payouts", Data_payouts.Data_payouts);
        setItemLS("transfers", Data_transfers.Data_transfers);
        setItemLS("wallets", Data_wallets.Data_wallets);
    }
    render() {
        return (
            <div >
                {this.load_bdd()}
                <BrowserRouter> {/*En fonction de l'url, on affiche le composant souhaité*/}
                    <Route exact path='/' component={Navigation} />
                    <Route exact path='/inscription' component={Navigation} />
                    <Route exact path='/connexion' component={Navigation} />

                    <Route exact path='/account' component={Navigation2} />
                    <Route exact path='/account' component={Account} />

                    <Route exact path='/informations' component={Navigation2} />
                    <Route exact path='/informations' component={Informations} />

                    <Route exact path='/virement' component={Navigation2} />
                    <Route exact path='/virement' component={Virement} />

                    <Route exact path='/addCard' component={Navigation2} />
                    <Route exact path='/addCard' component={AddCard} />

                    <Route exact path='/authentification' component={Navigation2} />
                    <Route exact path='/authentification' component={Authentification} />

                    <Route exact path='/update_Card' component={Navigation2} />
                    <Route exact path='/update_Card' component={UpdateCard} />

                    <Route exact path='/Update_User' component={Navigation2} />
                    <Route exact path='/Update_User' component={UpdateUser} />

                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/inscription' component={Inscription} />
                    <Route exact path='/connexion' component={Connexion} />
                </BrowserRouter>
            </div>
        );

    }
}

export default App;