import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';


class Update_User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fn :'',
            sn : '',
            em : '',
            pw : '',
            error : false
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange1(event){
        this.setState({fn : event.target.value });
    }
    handleChange2(event){
        this.setState({sn : event.target.value });
    }
    handleChange3(event){
        this.setState({em : event.target.value });
    }
    handleChange4(event){
        this.setState({pw : event.target.value });
    }

    handleSubmit(event)
    {
        event.preventDefault();

        let users = JSON.parse(localStorage.getItem("users"));

        if (this.state.fn != '' && this.state.sn != '' &&  this.state.em != '' && this.state.pw != '' )
        {
            let user = {
                id: localStorage.getItem('user_log'),
                first_name: this.state.fn,
                last_name: this.state.sn,
                email: this.state.em,
                password: this.state.pw,
                is_admin: 0
            }
                     
            var a = 0;
            users.map((index) => {
                if (index.id == localStorage.getItem('user_log')) {
                    users[a] = user;
                }
                else {
                    a++;
                }
            }
            );
    
            localStorage.setItem("users", JSON.stringify(users));    
            this.setState({ check: true });
        }
        else{
            this.setState({error: true})
        }
        
    }

    error_message() {
        return (<p>Un des champs est vide ou incorrect !</p>);
    }

    error_display = () => {
        if (this.state.error) {
            return (<div className="error">{this.error_message()}</div>);
        }
        else {

        }
    }

    check_redirect = () => {
        if (this.state.check) {
            return (
                <Redirect to='/account' />
            );
        }

    }

    render() {

        return (
            <div className='form' onSubmit={this.handleSubmit}> 
                {this.check_redirect()}
                <div className='box'>
                    <Form>
                    <h1>Modifer vos infomations</h1>
                        <FormGroup>
                            <Input type="text" name="fname" id="fn" placeholder="First name. . ." value={this.state.fn} onChange={this.handleChange1}/>
                        </FormGroup>

                        <FormGroup>
                            <Input type="text" name="sname" id="sn" placeholder="Last name. . ." value={this.state.sn} onChange={this.handleChange2} />
                        </FormGroup>

                        <FormGroup>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email adress. . ." value={this.state.em} onChange={this.handleChange3}/>
                        </FormGroup>

                        <FormGroup>
                            <Input type="password" name="password" id="pw" placeholder="Password. . ." value={this.state.pw} onChange={this.handleChange4}/>
                        </FormGroup>
                        <div>
                            <Button outline color="success">Inscription</Button>
                        </div>
                    </Form> 
                </div>
                {this.error_display()}
            </div>
        );
    }
}

export default Update_User