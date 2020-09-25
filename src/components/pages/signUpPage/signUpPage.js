import React from 'react';
import {Link} from 'react-router-dom';
import SignUpForm from '../../forms/signUpForm';
import Logo from '../../logo';

import './signUpPage.scss';

function SignUpPage(props) {
    return (
        <div>
            <Logo/>
            <SignUpForm/>
            <Link to="/signin" className="signin" color="text-primary">Sign in</Link>
        </div>
    )
}

export default SignUpPage;