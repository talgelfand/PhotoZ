import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from 'react-router-dom';

import './signInPage.scss';

function SignInPage(props) {
    return (
        <div>
            <img src="img/AppIcon.svg" alt="App icon" />
            <div className="title">PhotoZ</div>
            <Form className="form">
                <Label className="sign_in">Sign in</Label>
                <FormGroup className="form_group">
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email"></Input>
                </FormGroup>
                <FormGroup className="form_group">
                    <Label for="examplePassword">Password</Label>
                    <Input type="password"></Input>
                </FormGroup>

                <Link>Forgot password</Link>
                <Button color="primary">Sign in</Button>
            </Form>
            <Link className="signup" color="text-primary">Sign up</Link>
        </div>
    )
}

export default SignInPage;