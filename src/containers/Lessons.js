import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLessons } from '../actions/lessons';
import LessonCard from '../components/LessonCard';
import Lesson from './Lessons';
import LessonForm from './LessonForm';

class Lessons extends Component {
	constructor(props) {
		super(props)
		this.state = {
			lessons: this.props.lessons
		}

	}

	componentDidMount() {
		this.props.onGetLessons();
	}

	render() {
		
		const match = this.props.match;
		
		
		return(
			<div>
		
         			
          			<LessonForm />
        	
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	onGetLessons() {
		dispatch(getLessons());
	}
});

const mapStateToProps = (state) => {
	
	const { lessons : lessons } = state.lessons 
	return{
		lessons
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Lessons);