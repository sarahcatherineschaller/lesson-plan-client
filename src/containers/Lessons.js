import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLessons } from '../actions/lessons';
import {LessonCard} from '../components/LessonCard';
import LessonShow from './LessonShow';
import LessonForm from './LessonForm';
import { Row } from 'reactstrap';

class Lessons extends Component {

	render() {
		const lessons = this.props.lessons

		return(

			<div>
			<h1>Lesson Plans</h1>
				<Row>
			
				{this.props && this.props.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)}
				<LessonForm />
				</Row>
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
	console.log(state)
	
	return({
		lessons: state.lessonsReducer
	})
}
export default connect(mapStateToProps, { getLessons })(Lessons);