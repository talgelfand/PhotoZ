import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignInPage from '../../pages/signInPage';
import SignUpPage from '../../pages/signUpPage';
import SignInErrorPage from '../../pages/signInErrorPage';
import MainPage from '../../pages/mainPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path={["/", "/signin"]} component={SignInPage}/>
        <Route exact path="/signinerror" component={SignInErrorPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/main" component={MainPage}/>
      </div>
    </Router>
  );
}

export default App;