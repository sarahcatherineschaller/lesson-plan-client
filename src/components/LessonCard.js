import React, { Component } from 'react';
import { connect } from 'react-redux';

class LessonCard extends Component {

	render() {
		const { lesson, lessons } = this.props;

		return(

			<div key={lesson.id}>
				<h3>{this.props.lesson.title}</h3>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		lessons: state.lessons
	}
}

export default LessonCard;