import React, { Component } from 'react';
import { connect } from 'react-redux';
import LessonCard from '../components/LessonCard';

class Lesson extends Component {
	render() {
		return(
			<div>
				
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const lesson = state.lessons.find(lesson => {
		return lesson.id == ownProps.match.params.lessonId
	})

	return {
		lesson
	}
}

export default connect(mapStateToProps)(Lesson);