import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lessons extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		return(
			<div>
			</div>
		)
	}
}

const mapStateToProps = state = {
	return {
		lessons: state.lessons
	}
}
export default connect(mapStateToProps)(LessonPlans)