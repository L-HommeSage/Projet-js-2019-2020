import React, { Component } from 'react';
import './Informations.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getItemLS, getBalance } from '../Fonctions/Fonctions.js';


class InformationsGen extends Component {

    constructor(props) {  //Constructeur
        super(props);
    }
    
    //Fonctions pour récupérer les informations du LocalStorage
    get_FirstName = () => {
        var fn;
        getItemLS("users").map((index) => {
            if (localStorage.getItem("user_log") == index.id) {
                fn = index.first_name;
            }
        })
        return fn;
    }

    get_LastName = () => {
        var ln;
        getItemLS("users").map((index) => {
            if (localStorage.getItem("user_log") == index.id) {
                ln = index.last_name;
            }
        })
        return ln;
    }

    get_Email = () => {
        var em;
        getItemLS("users").map((index) => {
            if (localStorage.getItem("user_log") == index.id) {
                em = index.email;
            }
        })
        return em;
    }

    render() {
        return (
            <div className="boxinfo">
                <h1>Informations Générales</h1>
                <p>First Name : {this.get_FirstName()} </p>
                <p> Last Name :  {this.get_LastName()}</p>
                <p> Email : {this.get_Email()} </p>
                <p> Balance : {getBalance(getItemLS("user_log"))} euros</p>

                <Link to='/Update_user'>
                    <Button >Modifier</Button>
                </Link>
            </div>
        )
    }
}
export default InformationsGen;