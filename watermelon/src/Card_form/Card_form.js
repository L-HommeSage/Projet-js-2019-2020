import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';





class Card_form extends Component {

    constructor(props) {

        super(props);
        this.state = { id: props.id, four : props.four, brand : props.brand, expired_at: props.expired_at};

    }


    render() {
        return (
            <div>
                <Form>
                    <div>
                         id : 
                        
                    </div>
                    <div>
                        last_four: 
                        
                            <Input type="text" name="four" id="f" placeholder="Numéro. . ."  />
                         
                    </div>
                    <div>
                        brand : <Input type="text" name="four" id="f" placeholder="Numéro. . ."  />

                    </div>
                    <div>
                        expired_at : <Input type="text" name="four" id="f" placeholder="Numéro. . ."  />
 
                    </div>
                </Form>
               
            </div>
        )
    }
};

export default  Card_form;