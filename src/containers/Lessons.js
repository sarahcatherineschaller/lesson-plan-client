import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLessons } from '../actions/lessons';
import LessonCard from '../components/LessonCard';
import LessonShow from './LessonShow';
import LessonForm from './LessonForm';
import { Card, CardBody, Row, UncontrolledCollapse, Button } from 'reactstrap';


class Lessons extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			lessons: [],
		}
	}


	// handleOnClick = () => {
	// 	const lessonCopy = [...this.props.lessons]
	// 	// const lessonCopy = Object.assign(this.state.lessons, lessons)
	// 	// const lessonArray = Object.values(lessonCopy)

	// 	// const orderedLessons = lessonCopy.sort(function(a, b) { return b.likes - a.likes })

	// 	this.setState({
	// 		lessons: lessonCopy.sort(function(a, b) { return b.likes - a.likes })
	// 	})
		
	// }




	render() {

		const { lessons } = this.props

		return(

			<div>


				<Button color="primary" id="toggler" style={{ margin: '2rem' }}>
					New Lesson
				</Button>

				<UncontrolledCollapse toggler="#toggler">
					<LessonForm />
				</UncontrolledCollapse>
				<Row>
			
				{lessons && lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)}
				</Row>
			</div>
		
			
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
  return({
    lessons: state.lessonsReducer
  })
}

export default connect(mapStateToProps, { getLessons })(Lessons);