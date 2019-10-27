import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';


class CardForm extends Component {

    constructor(props) { //Constructeur
        super(props);
        this.state = {  //Les informations sur la carte sont récupérées à l'aide des properties
            id: props.id, 
            four : props.four, 
            brand : props.brand, 
            expired_at: props.expired_at
        };
    }
    render() { {/*Affichage de toutes les informations liées à une carte*/}
        return (
            <div>
                <Form>
                    <div>id :</div>
                    <div>
                        last_four: 
                        <Input 
                            type="text" 
                            name="four" 
                            id="f" 
                            placeholder="Numéro. . ."  
                        />
                         
                    </div>
                    <div>
                        brand : 
                        <Input 
                            type="text" 
                            name="four" 
                            id="f" 
                            placeholder="Numéro. . ."  
                        />
                    </div>
                    <div>
                        expired_at :
                        <Input 
                            type="text" 
                            name="four" 
                            id="f" 
                            placeholder="Numéro. . ."  
                        />
                    </div>
                </Form>
            </div>
        )
    }
};
export default  CardForm;