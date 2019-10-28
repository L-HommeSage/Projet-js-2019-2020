import React, { Component } from 'react';
import './Informations.css';
import InformationsGen from './InformationsGen.js'
import InformationsTransfersOut from './InformationsTransfersOut.js'
import InformationsTransfersIn from './InformationsTransfersIn.js'

class Informations extends Component {
    constructor(props) { //Constructeur
        super(props);
    }

    render() {
        return (
            <div className="background">
                <div className="panelTransfert">
                    <h1> Historique des transferts :</h1>
                    <div className="boxEnvoyé">
                        <h2>Envoyés : </h2>
                        <InformationsTransfersOut />
                    </div>
                    <div className="boxrecus">
                        <h2>Recus : </h2>
                        <InformationsTransfersIn />
                    </div>
                </div>
                <div className="panelInfo">
                    <InformationsGen />
                </div>
            </div>
        )
    }
}

export default Informations;