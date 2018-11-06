import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLessons } from '../actions/lessons';
import {LessonCard} from '../components/LessonCard';
import Lesson from './Lessons';
import LessonForm from './LessonForm';

class Lessons extends Component {

	// componentDidMount() {
	// 	this.props.getLessons();
	// }

	render() {

		return(
			<div>
			<h1>Lesson Plans</h1>
				{this.props && this.props.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)}
				<LessonForm />
			</div>
		)
	}
}

// const mapDispatchToProps = dispatch => ({
// 	onGetLessons() {
// 		dispatch(getLessons());
// 	}
// });

const mapStateToProps = (state) => {
	
	return({
		lessons: state.lessonsReducer
	})
}
export default connect(mapStateToProps, { getLessons })(Lessons);