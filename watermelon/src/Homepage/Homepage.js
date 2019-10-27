import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Homepage.css';




class Homepage extends Component {
    constructor(props) { //Constructeur
        super(props);
    }

    render() {
        return (
            <div className="full">
                <div className="watermelon">
                    <h1>Bienvenue sur <font color="red">Watermelon</font></h1>
                </div>
                <div className="homepage">
                    <div className="tech">
                        <h2>
                            Technologies utilisées:
                </h2>
                        <ul>
                            <li>ReactJS</li>
                            <li>JavaScript</li>
                            <li>Css</li>
                        </ul>
                        <h2>Pour tester le site:</h2>
                        <p>Inscrivez-vous ou connectez-vous :</p>
                        <ul>
                            <li>Login: bastien.vendrame@edu.ece.fr </li>
                            <li>mdp: azerty</li>
                            <li>Login: ramzi.agougil@edu.ece.fr </li>
                            <li>mdp: azertyu</li>
                            <li>Login: raphael.partouche@edu.ece.fr </li>
                            <li>mdp: azertyui</li>
                            <li>Login: pablo.antoniadis@edu.ece.fr </li>
                            <li>mdp: azertyuio</li>
                        </ul>
                    </div>
                    <div className="presentation">

                        <p className="consigne">
                            Ce projet a pour objectif la reproduction de manière simplifiée l’application Pumpkin
                            (application de paiement entre particuliers). Le but est de fournir une interface Web permettant
                            de gérer des utilisateurs, des dépôts, des retraits et des transferts d’argent entre chaque
                        utilisateur. </p>
                        <p className="consigne">
                            Ce site a été réalisé par
                    <a href="https://www.linkedin.com/in/bastien-vendrame-2a9471144/"> Bastien Vendrame</a> et <a href="https://fr.linkedin.com/in/pablo-antoniadis-869773189">Pablo Antoniadis</a> tout deux étudiants à L'ECE Paris,Lyon.
                            <hr></hr>
                            GitHub: <a href="https://github.com/L-HommeSage/Projet-js-2019-2020"> lien</a>
                        </p>
                    </div>
                    <div className="box1">
                        <h1 style={{ color: "red" }}>
                            Rejoignez-nous !
                </h1>

                        <p>
                            L'application en ligne sécurisée qui vous permettra d'échanger de l'argent avec tous vos amis.
                    </p>
                        <hr />
                        <p>
                            Grâce à nous, vous pourrez régler simplement vos dettes et récuperer l'argent qui vous est dû.
                    </p>
                        <div className="check">
                            <p>
                                <Link to="/inscription">
                                    <Button outline color="danger">
                                        Inscription
                                </Button>
                                </Link>
                            </p>
                            <p>
                                <Link to="/connexion">
                                    <Button outline color="danger">
                                        Connexion
                                </Button>
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}
export default Homepage;





