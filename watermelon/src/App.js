import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Naviguation from './Naviguation/Naviguation.js';
import Homepage from './Homepage/Homepage.js';
import Inscription from './Inscription/Inscription.js';
import  Connexion from './Connexion/Connexion.js';
import Footer from './Footer/Footer.js';
import './App.css';


class App extends Component {



  render() {

    return (
      <div >
        <BrowserRouter>

         
          <Route exact path='/' component={() => <Naviguation />} />
          <Route exact path='/inscription' component={() => <Naviguation />} />
          <Route exact path='/connexion' component={() => <Naviguation />} />

          <Route exact path='/' component={() => <Homepage />} />
          <Route exact path='/inscription' component={() => <Inscription />} />
          <Route exact path='/connexion' component={() => <Connexion />} />

          
        </BrowserRouter>
      </div>
    );

  }
}

export default App;