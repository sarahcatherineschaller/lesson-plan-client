import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLessons } from '../actions/lessons';
import {LessonCard} from '../components/LessonCard';
import LessonShow from './LessonShow';
import LessonForm from './LessonForm';
import { Card, CardBody, Row, UncontrolledCollapse, Button } from 'reactstrap';


class Lessons extends Component {

	render() {
		const lessons = this.props.lessons

		return(

			<div>

				<Button color="primary" id="toggler" style={{ margin: '2rem' }}>
					New Lesson
				</Button>
				<UncontrolledCollapse toggler="#toggler">
					<LessonForm />
				</UncontrolledCollapse>
				<Row>
			
				{this.props && this.props.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)}
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