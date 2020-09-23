import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignInPage from '../pages/signInPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignInPage}/>
      </div>
    </Router>
  );
}

export default App;