import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';

import './signInForm.scss';

class SignInForm extends Component {

    state = {
        email: '',
        password: '', 
        isAuthenticated: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSaving = () => {
        if (this.state.email !== '' && this.state.password !== '') {
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('password', this.state.password);
            this.setState({
                isAuthenticated: true
            })
        } else {
            this.setState({
                isAuthenticated: false
            })
        } 
    }

    render() {
        return (
            <Form className="signin_form">
                    <Label className="sign_in">Sign in</Label>
                    {(this.state.isAuthenticated || this.state.email === '' || this.state.password === '') ? 
                        null
                        :
                        <Alert color="danger" fade={false}>Email or password is wrong</Alert>}
                    <FormGroup className="form_group">
                        <Label for="exampleEmail">Email</Label>
                        <Input 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            type="email" 
                            name="email">
                        </Input>
                    </FormGroup>
                    <FormGroup className="form_group">
                        <Label for="examplePassword">Password</Label>
                        <Input 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            type="password" 
                            name="password">
                        </Input>
                    </FormGroup>
                    <Link>Forgot password</Link>
                    <Button 
                        onClick={this.handleSaving} 
                        className="sign_in_button" 
                        color="primary">
                            <Link to={this.state.isAuthenticated ? "/main" : "/signin"} className="sign_in_link">Sign in</Link>
                    </Button>
                </Form>
        )
    }
}

export default SignInForm;