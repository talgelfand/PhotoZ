import React from 'react';
import NavBar from '../../components/navBar';
import Post from '../../components/post';

import './mainPage.scss';

function MainPage() {
    return (
        <div className="main">
            <NavBar/>
            <Post/>
        </div>
    )
}

export default MainPage;