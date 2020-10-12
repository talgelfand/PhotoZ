import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignUpForm from '../../components/forms/signUpForm';
import Logo from '../../components/logo';
import FlatLayout from '../../layouts/flatLayout';
import Modal from 'react-modal';

import './signUpPage.scss';

class SignUpPage extends Component {

    state = {
        isRegistered: true
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isRegistered: !prevState.isRegistered
        }));
    }

    render() {
        return (
            <FlatLayout>
                <Logo/>
                <SignUpForm/>
                <Link to="/signin" className="signin" color="text-primary">Sign in</Link>
                {this.state.isRegistered ? 
                    <Modal
                        isOpen={this.state.isRegistered}
                        onRequestClose={this.toggleModal}
                        style = {
                            {
                                overlay: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                content: {
                                    margin: '0 auto',
                                    top: '50%',
                                    left: '50%',
                                    right: 'auto',
                                    bottom: 'auto',
                                    marginRight: '-50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontWeight: 'bold'
                                }
                            }
                        }
                    >
                        <img className='icon' src='img/AppIcon.svg' alt='icon'/>
                        New user is successfully registered!
                    </Modal> 
                    : 
                    null}
            </FlatLayout>
        )
    }

}

export default SignUpPage;