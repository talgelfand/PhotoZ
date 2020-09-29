import React from 'react';
import {Link} from 'react-router-dom';
import SignUpForm from '../../components/forms/signUpForm';
import Logo from '../../components/logo';

import './signUpPage.scss';

function SignUpPage() {
    return (
        <div>
            <Logo/>
            <SignUpForm/>
            <Link to="/signin" className="signin" color="text-primary">Sign in</Link>
        </div>
    )
}

export default SignUpPage;