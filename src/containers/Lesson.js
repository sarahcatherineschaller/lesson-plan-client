import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLesson } from '../actions/lessons';


class Lesson extends Component {
	componentDidMount() {
		this.props.getLesson(this.props.match.params.lessonId)
	}

	render() {
		let lesson = this.props.lessons[0]
		

		return(


			<div>
				{lesson ? (
					<div>
						<h1>{lesson.title}</h1>
						<h3>Grade Level: {lesson.grade_level}</h3>
					</div>
				) : (
					<p>Please Wait</p>
				)}
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

export default connect(mapStateToProps, { getLesson })(Lesson);