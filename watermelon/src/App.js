import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation.js';
import Homepage from './Homepage/Homepage.js';
import Inscription from './Inscription/Inscription.js';
import  Connexion from './Connexion/Connexion.js';
import Footer from './Footer/Footer.js';
import Account from './Account/Account.js';
import Navigation2 from './Navigation2/Navigation2.js';


import './App.css';


class App extends Component {



  render() {

    return (
      <div >
        <BrowserRouter>

         
          <Route exact path='/' component={Navigation} />
          <Route exact path='/inscription' component={Navigation } />
          <Route exact path='/connexion' component={Navigation} />

          <Route exact path='/account' component={Navigation2} />
          <Route exact path='/account' component={Account} />
          
          <Route exact path='/' component={Homepage }/>
          <Route exact path='/inscription' component={Inscription} />
          <Route exact path='/connexion' component={Connexion} />

          
        </BrowserRouter>
      </div>
    );

  }
}

export default App;