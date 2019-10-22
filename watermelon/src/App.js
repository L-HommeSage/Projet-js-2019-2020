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


import Data_users from './Bdd/Data_users';
import Data_cards from './Bdd/Data_cards';
import Data_payin from './Bdd/Data_payin';
import Data_payout from './Bdd/Data_payout';
import Data_transfers from './Bdd/Data_transfers';
import Data_wallets from './Bdd/Data_wallets';


import './App.css';


class App extends Component {


  load_bdd() {

    localStorage.setItem("users", JSON.stringify(Data_users.Data_users));
    localStorage.setItem("cards", JSON.stringify(Data_cards.Data_cards));
    localStorage.setItem("payin", JSON.stringify(Data_payin.Data_payin));
    localStorage.setItem("payout", JSON.stringify(Data_payout.Data_payout));
    localStorage.setItem("transfers", JSON.stringify(Data_transfers.Data_transfers));
    localStorage.setItem("wallets", JSON.stringify(Data_wallets.Data_wallets));

  }
  render() {

    return (
      <div >

        {this.load_bdd()}

        <BrowserRouter>

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

          <Route exact path='/' component={Homepage} />
          <Route exact path='/inscription' component={Inscription} />
          <Route exact path='/connexion' component={Connexion} />


        </BrowserRouter>
      </div>
    );

  }
}

export default App;