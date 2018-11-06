import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Lessons from './containers/Lessons';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/lessons" component={Lessons} />
       </div>
      </Router>
    );
  }
}

export default App;
