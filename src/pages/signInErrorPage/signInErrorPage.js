import React from 'react';
import SignInErrorForm from '../../components/forms/signInErrorForm';
import Logo from '../../components/logo';

import '../../styles/signInErrorPage.scss';

function SignInErrorPage() {
    return (
        <div>
            <Logo/>
            <SignInErrorForm className="sign_in_error_form"/>
        </div>
    )
}

export default SignInErrorPage;