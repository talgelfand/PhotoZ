import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../../components/forms/signUpForm'
import Logo from '../../components/logo'
import FlatLayout from '../../layouts/flatLayout'

import './signUpPage.scss'

class SignUpPage extends Component {
  render() {
    return (
      <FlatLayout>
        <Logo />
        <SignUpForm />
        <Link to="/signin" className="signin" color="text-primary">
          Sign in
        </Link>
      </FlatLayout>
    )
  }
}

export default SignUpPage
