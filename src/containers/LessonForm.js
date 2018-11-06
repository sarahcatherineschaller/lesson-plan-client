import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLesson } from '../actions/lessons';
import { updateLessonFormData } from '../actions/lessonForm';

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
		const { title } = this.props.lessonFormData

		return(
			<div>
				<form onSubmit={ (event) => this.handleSubmit(event) }>
				<p>
					<label>add lesson plan</label>
					<input type="text" onChange={ event => this.handleChange(event) } name="title" value={ title } />
				</p>
				<input type="submit" />
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