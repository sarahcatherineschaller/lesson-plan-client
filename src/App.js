import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import LessonPlan from './containers/LessonPlans';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/lesson_plans" component={LessonPlans} />
       </div>
      </Router>
    );
  }
}

export default App;
