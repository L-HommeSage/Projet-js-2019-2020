import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Inscription.css';

class Inscription extends Component {

    constructor(props) {
        super(props);
    };


    render() {

        return (
            <div className='form' > 
                <div className='box2'>
                    <Form>
                    <h1>Sign-in</h1>
                        <FormGroup>
                            <Input type="text" name="fname" id="fn" placeholder="First name. . ." />
                        </FormGroup>

                        <FormGroup>
                            <Input type="text" name="sname" id="sn" placeholder="Second name. . ." />
                        </FormGroup>

                        <FormGroup>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email adress. . ." />
                        </FormGroup>

                        <FormGroup>
                            <Input type="password" name="password" id="pw" placeholder="Password. . ." />
                        </FormGroup>

                        <div>
                            <Button outline color="success">Connexion</Button>
                        </div>


                    </Form> 
                    
                </div>
            </div>
        );
    }
}
        
export default Inscription;