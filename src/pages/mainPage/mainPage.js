import React from 'react';
import PostList from '../../components/postList';
import DashboardLayout from '../../layouts/dashboardLayout';

import './mainPage.scss';

function MainPage() {
    return (
        <DashboardLayout>
            <div className="main">
                <PostList/>
            </div>
        </DashboardLayout>
    )
}

export default MainPage;