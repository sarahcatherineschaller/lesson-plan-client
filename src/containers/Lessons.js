import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLessons } from '../actions/lessons';
import LessonCard from '../components/LessonCard';
import Lesson from './Lessons';
import LessonForm from './LessonForm';

class Lessons extends Component {

	componentDidMount() {
		this.props.getLessons();
	}

	render() {

		return(
			<div>
				{this.props && this.props.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)}
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
	console.log(state)
	
	const { lessons : lessons } = state.lessons 
	return{
		lessons
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Lessons);