import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './Pages/Home/index';
import ARScreen from './Pages/AR/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
  //   <a-scene embedded arjs='sourceType: webcam;'>
  //   <a-marker preset="hiro">
  //       <a-box position='0 0.5 0' material='color: yellow;'></a-box>
  //   </a-marker>
  //   <a-entity camera></a-entity>
  // </a-scene>
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
