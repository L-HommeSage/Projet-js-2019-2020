import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Naviguation from './Naviguation/Naviguation.js';
import Homepage from './Homepage/Homepage.js';
import Inscription from './Inscription/Inscription.js';
import Footer from './Footer/Footer.js';
import './App.css';


class App extends Component {



  render() {

    return (
      <div >
        <BrowserRouter>

          <div><Naviguation /></div>


          <Route exact path='/' component={() => <Homepage />} />
          <Route exact path='/inscription' component={() => <Inscription />} />

          <div><Footer /></div>
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
