import React from 'react';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

function App() {
  return (
    <div >
      <CssBaseline/>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path='/about'
            component={About}
          />
          <Route
            exact
            path='/contact'
            component={Contact}
          />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
