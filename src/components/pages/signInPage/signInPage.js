import React from 'react';
import {Link} from 'react-router-dom';
import SignInForm from '../../forms/signInForm';

import './signInPage.scss';

function SignInPage(props) {
    return (
        <div>
            <img src="img/AppIcon.svg" alt="App icon" />
            <div className="title">PhotoZ</div>
            <SignInForm/>
            <Link to="/signup" className="signup" color="text-primary">Sign up</Link>
        </div>
    )
}

export default SignInPage;