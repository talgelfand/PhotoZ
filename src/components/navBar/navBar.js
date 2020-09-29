import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button, DropdownItem, DropdownMenu, Navbar, NavbarText} from 'reactstrap';

import '../../styles/navbar.scss';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar className="navbar" color="primary">
                <img src="img/NavbarLogo.png" alt="Navbar Logo"></img>
                <NavbarText className="navbar__title">PhotoZ</NavbarText>
                <Button>Create new post</Button>
                <DropdownMenu>
                    <DropdownItem>
                        <Link to="/">Sign out</Link>
                    </DropdownItem>
                </DropdownMenu>
            </Navbar>
        )
    }
}