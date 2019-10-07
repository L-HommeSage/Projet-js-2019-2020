import React, { Component } from 'react';
import { Button, Form, Input, FormGroup } from 'reactstrap';

class AddCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form2'  >
                <div class='box2'>
                    <Form>
                        <h1>Nouvelle carte</h1>
                        <FormGroup>
                            <Input type="text" name="marque" id="d" placeholder="Marque. . ."  />
                        </FormGroup>
                        <FormGroup>

                            <Input type="text" name="lastfour" id="lf" placeholder="Numéro. . ."  />
                        </FormGroup>
                        <FormGroup>
                            <Input type="date" name="Date" id="d" placeholder="Date. . ."  />
                        </FormGroup>

                        <div>
                            <Button outline color="success">Ajouter la carte</Button>
                        </div>
                    </Form>
                </div>

            </div>
        );
    }
}
export default AddCard;