import React from 'react';
import {Link} from 'react-router-dom';
import SignUpForm from '../../forms/signUpForm';

import './signUpPage.scss';

function SignUpPage(props) {
    return (
        <div>
            <img src="img/AppIcon.svg" alt="App icon" />
            <div className="title">PhotoZ</div>
            <SignUpForm/>
            <Link to="/signin" className="signin" color="text-primary">Sign in</Link>
        </div>
    )
}

export default SignUpPage;