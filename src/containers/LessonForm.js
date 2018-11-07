import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLesson } from '../actions/lessons';
import { updateLessonFormData } from '../actions/lessonForm';
import Lessons from './Lessons';

class LessonForm extends Component {

	handleChange = event => {
		const { name, value } = event.target 
		const currentLessonFormData = Object.assign({}, this.props.lessonFormData, {
			[name]: value
		})
		this.props.updateLessonFormData(currentLessonFormData)
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.createLesson(this.props.lessonFormData, this.props.history)
	}

	render() {
		const { title, grade_level, subject, total_time, objective, materials, summary, other } = this.props.lessonFormData

		return(
			<div>
				<form onSubmit={ (event) => this.handleSubmit(event) }>
				<p>
					<label>Title</label>
					<input type="text" onChange={ event => this.handleChange(event) } name="title" value={ title } />
					<label>Grade Level</label>
					<input type="text" onChange={ event => this.handleChange(event) } name="grade_level" value={ grade_level } />
					<label>Subject</label>
					<input type="text" onChange={ event => this.handleChange(event) } name="subject" value={ subject } />
					<label>Total Time</label>
					<input type="text" onChange={ event => this.handleChange(event) } name="total_time" value={ total_time } />
					<label>Objective</label>
					<textarea onChange={ event => this.handleChange(event) } name="objective" value={ objective } />
					<label>Materials</label>
					<textarea onChange={ event => this.handleChange(event) } name="materials" value={ materials } />
					<label>Summary</label>
					<textarea onChange={ event => this.handleChange(event) } name="summary" value={ summary } />
					<label>Other</label>
					<textarea onChange={ event => this.handleChange(event) } name="other" value={ other } />
				</p>
				<input className="newLessonButton" type="submit" />
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		lessonFormData: state.lessonFormData
	}
}




export default connect(mapStateToProps, { createLesson, updateLessonFormData })(LessonForm);