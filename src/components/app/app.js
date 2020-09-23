import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignInPage from '../pages/signInPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>This is PhotoZ app</h1>
        <Route exact path="/signin" component={SignInPage}/>
      </div>
    </Router>
  );
}

export default App;