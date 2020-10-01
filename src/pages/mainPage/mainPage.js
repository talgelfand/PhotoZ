import React from 'react';
import NavBar from '../../components/navBar';
import PostList from '../../components/postList';
import ModalWindow from '../../components/modal';

import './mainPage.scss';

function MainPage() {
    return (
        <div className="main">
            <NavBar/>
            <PostList/>
            <ModalWindow/>
        </div>
    )
}

export default MainPage;