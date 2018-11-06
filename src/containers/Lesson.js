import React, { Component } from 'react';
import { connect } from 'react-redux';
import LessonCard from '../components/LessonCard';
import { getLesson } from '../actions/lessons';
import LessonForm from './LessonForm'
import Lessons from './Lessons';

class Lesson extends Component {

	componentDidMount() {
		this.props.getLesson(this.props.match.params.recipeId)
	}
	render() {
		let lesson = this.props.lesson[0]
		return(
			<div>
				<h1>Lesson</h1>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return({
		lesson: state.lessonsReducer
	})
}

export default connect(mapStateToProps, { getLesson })(Lesson);