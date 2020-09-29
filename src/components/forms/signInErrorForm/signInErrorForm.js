import React from 'react';
import {Button, Form, FormGroup, Input, Label, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';

import '../../../styles/signInForm.scss';

function SignInErrorForm() {
    return (
        <Form className="signin_form">
                <Label className="sign_in">Sign in</Label>
                <Alert color="danger" fade={false}>Email or password is wrong</Alert>
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

export default SignInErrorForm;