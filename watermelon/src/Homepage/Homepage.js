import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Homepage.css';



class Homepage extends Component {

    constructor(props) {
        super(props);

        let c;
        };
    

    render() {

        return (
            <div className="homepage">
                
                    <h1 >Bienvenue sur Watermelon</h1>
                    <p >L'application en ligne sécurisée qui vous permettra d'échanger de l'argent avec tous vos amis.</p>
                    <hr  />
                    <p>Grâce à nous ...</p>
                    <p >
                        <Link to = "/inscription"><Button outline color="danger">Inscription</Button></Link>
                    </p>
                    <p>
                        <Button outline color="danger">Connexion</Button>
                    </p>
                
            </div>

        );
    }

}
export default Homepage;