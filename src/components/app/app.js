import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import SignInPage from '../../pages/signInPage';
import SignUpPage from '../../pages/signUpPage';
import SignInErrorPage from '../../pages/signInErrorPage';
import MainPage from '../../pages/mainPage';
import ProtectedRoute from '../protectedRoute';
import Auth from '../auth';

function App() {

  return (
      <Router>
        <Auth>
          <Switch>
            <div className="App">
              <Route exact path={["/", "/signin"]} component={SignInPage}/>
              <Route exact path="/signinerror" component={SignInErrorPage}/>
              <Route exact path="/signup" component={SignUpPage}/>
              <ProtectedRoute exact path="/main" component={MainPage}/>
            </div>
          </Switch>
        </Auth>
      </Router>
  );
}

export default connect()(App);