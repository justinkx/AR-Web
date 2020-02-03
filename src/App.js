import React from 'react';
import './App.css';
import HomeScreen from './Pages/Home/index';
import ARScreen from './Pages/AR/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
  
  <Router>
    <Switch>
          <Route path="/AR">
            <ARScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
