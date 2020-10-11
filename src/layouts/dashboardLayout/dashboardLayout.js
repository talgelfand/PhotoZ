import React from 'react';
import {Container} from 'reactstrap';
import NavBar from '../../components/navBar';

function DashboardLayout({children}) {
    return (
        <div className="dashboard_layout">
            <NavBar/>
            <Container>{children}</Container>
        </div>
    )
}

export default DashboardLayout;