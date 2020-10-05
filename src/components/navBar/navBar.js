import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarText} from 'reactstrap';
import ModalWindow from '../modal';

import './navbar.scss';

export default class NavBar extends Component {

    state = {
        dropdownOpen: false,
        opened: false
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggleModal = () => {
        this.setState(prevState => ({
            opened: !prevState.opened
        }));
    }

    render() {
        return (
            <div>
                <Navbar className="navbar" color="primary">
                    <div className="navbar__left_wrapper">
                        <svg className="navbar__icon"></svg>
                        <NavbarText className="navbar__title">PhotoZ</NavbarText>
                    </div>
                    <div className="navbar__right_wrapper">
                        <Button onClick={this.toggleModal} className="navbar__button">Create new post</Button>
                        {this.state.opened ? <ModalWindow/> : null}
                        <Dropdown className="navbar__dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                            <DropdownToggle caret className="navbar__dropdown">
                                John Doe
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to="/signin">Sign out</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </Navbar>
            </div>
        )
    }
}