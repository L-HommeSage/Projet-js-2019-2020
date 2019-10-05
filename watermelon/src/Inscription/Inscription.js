import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
                            
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email adress. . ." />
                        </FormGroup>

                        <FormGroup>
                            
                            <Input type="password" name="password" id="examplePassword" placeholder="Password. . ." />
                        </FormGroup>
                    </Form> 
                    
                </div>
            </div>
        );
    }
}
        
export default Inscription;