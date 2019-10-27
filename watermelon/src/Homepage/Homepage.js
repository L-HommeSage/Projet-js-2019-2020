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
            <div className="homepage">
                <div className="box1">
                    <h1>
                        Bienvenue sur Watermelon
                    </h1>
                    <p>
                        L'application en ligne sécurisée qui vous permettra d'échanger de l'argent avec tous vos amis.
                    </p>
                    <hr />
                    <p>
                        Grâce à nous, vous pourrez régler simplement vos dettes et récuperer l'argent qui vous est dû.
                    </p>
                    <p>
                        Rejoignez-nous !
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
        );
    }
}
export default Homepage;