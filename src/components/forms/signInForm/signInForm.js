import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from 'react-router-dom';

import './signInForm.scss';

function SignInForm() {
    return (
        <Form className="signin_form">
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
                <Button className="sign_in_button" color="primary">Sign in</Button>
            </Form>
    )
}

export default SignInForm;