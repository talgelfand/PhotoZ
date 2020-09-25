import React from 'react';
import {Link} from 'react-router-dom';
import SignInForm from '../../forms/signInForm';
import Logo from '../../logo';

import './signInPage.scss';

function SignInPage(props) {
    return (
        <div>
            <Logo/>
            <SignInForm/>
            <Link to="/signup" className="signup" color="text-primary">Sign up</Link>
        </div>
    )
}

export default SignInPage;