import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignInPage from '../pages/signInPage';
import SignUpPage from '../pages/signUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignInPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
      </div>
    </Router>
  );
}

export default App;