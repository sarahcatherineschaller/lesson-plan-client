import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Lessons from './containers/Lessons';
import { connect } from 'react-redux';
import { getLessons } from './actions/lessons';
import lessonsReducer from './reducers/lessonsReducer'

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getLessons()
  }

  render() {
    return (
      <Router>
       <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/lessons" component={Lessons} />
        </Switch>
       </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    lessons: state.lessonsReducer
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    getLessons: () => {
      let action = getLessons()
      dispatch(action)
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
