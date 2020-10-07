import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Alert} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';

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
        localStorage.setItem([event.target.name], event.target.value)
    }

    handleRedirecting = () => {
        const email = this.state.email;
        const password = this.state.password;
        if (email !== '' && password !== '') {
            this.setState({
                isAuthenticated: true
            })
            this.props.history.push('/main')
        } else {
            this.setState({
                isAuthenticated: false
            })
            this.props.history.push('/signin');
            localStorage.clear();
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
                    onClick={this.handleRedirecting}
                    className="sign_in_button" 
                    color="primary">
                    Sign in
                </Button>
            </Form>
        )
    }
}

export default withRouter(SignInForm);