import React, { Component } from 'react';

class Get_amount extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            {JSON.parse(localStorage.getItem("wallets")).map((index) => {
                if (localStorage.getItem("user_log") == index.user_id) {
                    return (
                        <div>{index.amount}</div>
                    );
                }
            })}
            </div>
        )
    }

}
export default Get_amount;