import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLesson } from '../actions/lessons';
import { updateLessonFormData } from '../actions/lessonForm';
import { resetFormData } from '../actions/lessonForm';
import Lessons from './Lessons';
import { Col, Button, Form, Label, Input, FormGroup, FormText } from 'reactstrap';


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
				<Col sm="12" md={{ size: 6, offset:3 }}>
				<Form onSubmit={ this.handleSubmit }>
				
				<FormGroup>
					<Label>Title</Label>
					<Input type="text" onChange={this.handleChange} name="title" value={ title } />
		
				</FormGroup>
				<FormGroup>
					<Label>Grade Level</Label>
					<Input type="text" onChange={this.handleChange} name="grade_level" value={ grade_level } />
				</FormGroup>
				<FormGroup>
					<Label>Subject</Label>
					<Input type="text" onChange={this.handleChange} name="subject" value={ subject } />
				</FormGroup>
				<FormGroup>
					<Label>Total Time</Label>
					<Input type="text" onChange={this.handleChange} name="total_time" value={ total_time } />
				</FormGroup>
				<FormGroup>
					<Label>Objective</Label>
					<Input type="textea" onChange={this.handleChange} name="objective" value={ objective } />
				</FormGroup>
				<FormGroup>
					<Label>Materials</Label>
					<Input type="textarea" onChange={this.handleChange} name="materials" value={ materials } />
				</FormGroup>
				<FormGroup>
					<Label>Summary</Label>
					<Input type="textarea" onChange={this.handleChange} name="summary" value={ summary } />
				</FormGroup>
				<FormGroup>
					<Label>Other</Label>
					<Input type="textarea" onChange={this.handleChange} name="other" value={ other } />
				</FormGroup>
				<input type="submit" />
				
			</Form>

			</Col>
		)
	}
}

const mapStateToProps = state => {
	return {
		lessonFormData: state.lessonFormData
	}
}




export default connect(mapStateToProps, { createLesson, updateLessonFormData })(LessonForm);