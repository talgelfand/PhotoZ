import React from 'react';
import {Link} from 'react-router-dom';
import SignInForm from '../../components/forms/signInForm';
import Logo from '../../components/logo';
import FlatLayout from '../../layouts/flatLayout';

import './signInPage.scss';

function SignInPage() {
    return (
        <FlatLayout>
            <Logo/>
            <SignInForm/>
            <Link to="/signup" className="signup" color="text-primary">Sign up</Link>
        </FlatLayout>
    )
}

export default SignInPage;