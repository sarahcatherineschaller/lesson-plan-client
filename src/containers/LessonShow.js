import React, { Component } from 'react';
import { connect } from 'react-redux';


const LessonShow = ({ lesson }) =>
	<div>
		<h1>{lesson.title}</h1>
	</div>



const mapStateToProps = (state, ownProps) => {

	const lesson = state.lessonsReducer.find(lesson => lesson.id == ownProps.match.params.lessonId)

	if (lesson) {
		return {lesson}
	} else {
		return {lesson: {}}
	}
}


export default connect(mapStateToProps)(LessonShow);