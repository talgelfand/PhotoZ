import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Consumer} from '../context';

function ProtectedRoute({component: Component, ...rest}) {

    const isAuthenticated = true;
    
    return (
        <Consumer>
            <Route 
                {...rest} 
                render={props => {
                    if (isAuthenticated) {
                        return <Component {...props}/>
                    } else {
                        return <Redirect to="/signin"/>
                    }
                }
            }/>
        </Consumer>
    )
}

export default ProtectedRoute;