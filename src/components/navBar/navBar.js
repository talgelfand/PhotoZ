import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarText} from 'reactstrap';

import './navbar.scss';

export default class NavBar extends Component {

    state = {
        dropdownOpen: false
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Navbar className="navbar" color="primary">
                <div className="navbar__left_wrapper">
                    <svg className="navbar__icon"></svg>
                    <NavbarText className="navbar__title">PhotoZ</NavbarText>
                </div>
                <div className="navbar__right_wrapper">
                    <Button className="navbar__button">Create new post</Button>
                    <Dropdown className="navbar__dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                        <DropdownToggle caret className="navbar__dropdown">
                            John Doe
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="#">Sign out</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Navbar>
        )
    }
}