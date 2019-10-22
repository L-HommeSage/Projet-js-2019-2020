import React, { Component } from 'react';
import { Button } from 'reactstrap';





class Card extends Component {

    constructor(props) {

        super(props);
        this.state = { id: props.id, four : props.four, brand : props.brand, expired_at: props.expired_at};

    }


    render() {
        return (
            <div>
                <div> id : {this.state.id} </div>
                <div>last_four: {this.state.four}  </div>
                <div>brand : {this.state.brand} </div>
                <div>expired_at : {this.state.expired_at} </div>
                <Button color='danger' >X</Button>
            </div>
        )
    }
};

export default Card;