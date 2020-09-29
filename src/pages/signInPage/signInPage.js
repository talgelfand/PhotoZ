import React from 'react';
import {Link} from 'react-router-dom';
import SignInForm from '../../components/forms/signInForm';
import Logo from '../../components/logo';

import './signInPage.scss';

function SignInPage() {
    return (
        <div>
            <Logo/>
            <SignInForm/>
            <Link to="/signup" className="signup" color="text-primary">Sign up</Link>
        </div>
    )
}

export default SignInPage;