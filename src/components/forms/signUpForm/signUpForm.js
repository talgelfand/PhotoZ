import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

import './signUpForm.scss';

function SignUpForm() {
    return (
        <Form className="form">
            <Label className="sign_up">Sign up</Label>
            <FormGroup className="form_group">
                <Label for="exampleUsername">Username</Label>
                <Input type="text"></Input>
            </FormGroup>
            <FormGroup className="form_group">
                <Label for="exampleEmail">Email</Label>
                <Input type="email"></Input>
            </FormGroup>
            <FormGroup className="form_group">
                <Label for="examplePassword">Password</Label>
                <Input type="password"></Input>
            </FormGroup>

            <Button className="sign_up_button" color="primary">Sign up</Button>
        </Form>
    )
}

export default SignUpForm;