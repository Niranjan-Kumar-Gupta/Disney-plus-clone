import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Detail from './componenets/Detail';
import Login from './componenets/Login';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
             <Home />
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;

