import React from 'react';
import NavBar from '../../components/navBar';
import PostList from '../../components/postList';

import './mainPage.scss';

function MainPage() {
    return (
        <div className="main">
            <NavBar/>
            <PostList/>
        </div>
    )
}

export default MainPage;