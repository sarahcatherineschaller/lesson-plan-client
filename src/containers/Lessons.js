import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lessons extends Component {
	constructor(props) {
		super(props)

	}

	componentDidMount() {
		this.props.getLessonPlans();
	}

	render() {
		return(
			<div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { lessons : lessons } = state.lessons 
	return{
		lessons
	}
}
export default connect(mapStateToProps)(Lessons);