import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from 'react';

function PrivateRoute({path, component: Component, layout, ...rest}) {
    const isAuthenticated = true;

    return (
        <Route
            {...rest}
            path={path}
            render={props => isAuthenticated
                ? <Layout><Component{...props}/></Layout>
                :<Redirect to={{pathname: "/sign-in"}}/>}
        />
    )
}

export default PrivateRoute;