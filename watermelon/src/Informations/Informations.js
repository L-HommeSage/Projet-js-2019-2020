import React, { Component } from 'react';
import './Informations.css';
import Informations_Gen from './Informations_Gen.js'
import Informations_Transfers_Out from './Informations_Transfers_Out.js'
import Informations_Transfers_In from './Informations_Transfers_In.js'

class Informations extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="background">
                <div className="panelTransfert">
                    <h1> Historique des transferts :</h1>
                    <div className="boxEnvoyé">
                        <h2>Envoyés : </h2>
                        <Informations_Transfers_Out />
                    </div>

                    <div className="boxrecus">
                        <h2>Recus : </h2>
                        <Informations_Transfers_In />
                    </div>
                </div>
                <div className="panelInfo">
                    <Informations_Gen />
                </div>
            </div>
        )
    }
}

export default Informations;