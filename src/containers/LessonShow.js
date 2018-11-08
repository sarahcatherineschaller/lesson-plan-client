import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteLesson } from '../actions/lessons';


const LessonShow = ({ lesson }) =>
	<div>
		<h2>{lesson.title}</h2>
		<p>Grade Level: {lesson.grade_level}</p>
		<p>Subject: {lesson.subject}</p>
		<p>Total Time: {lesson.total_time}</p>
		<p>Objective: {lesson.objective}</p>
		<p>Materials: {lesson.materials}</p>
		<p>Summary: {lesson.summary}</p>
		<p>Other information: {lesson.other}</p>
	</div>



const mapStateToProps = (state, ownProps) => {

	const lesson = state.lessonsReducer.find(lesson => lesson.id == ownProps.match.params.lessonId)

	if (lesson) {
		return {lesson}
	} else {
		return {lesson: {}}
	}
}


export default connect(mapStateToProps, { deleteLesson })(LessonShow);