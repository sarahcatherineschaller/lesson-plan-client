import React, { Component } from 'react';
import { connect } from 'react-redux';

class LessonPlans extends Component {
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
	return{
		lesson_plans: state.lesson_plans
	}
}
export default connect(mapStateToProps)(LessonPlans);