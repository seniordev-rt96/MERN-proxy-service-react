import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import Membership from './pages/Membership';
import Profile from './pages/Profile';
import Help from './pages/Help';

import './assets/styles/app.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/membership" exact component={ Membership } />
            <Route path="/profile" exact component={ Profile } />
            <Route path="/help" exact component={ Help } />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;