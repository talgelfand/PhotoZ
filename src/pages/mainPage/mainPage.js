import React from 'react';
import NavBar from '../../components/navBar';
import PostList from '../../components/postList';
import Modal from '../../components/modal';

import './mainPage.scss';

function MainPage() {
    return (
        <div className="main">
            <NavBar/>
            <PostList/>
            <Modal/>
        </div>
    )
}

export default MainPage;