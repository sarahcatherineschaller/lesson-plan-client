import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLessons } from '../actions/lessons';

class Lessons extends Component {
	constructor(props) {
		super(props)

	}

	componentDidMount() {
		this.props.onGetLessons();
	}

	render() {
		
		return(
			<div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	onGetLessons() {
		dispatch(getLessons());
	}
});

const mapStateToProps = (state) => {
	const { lessons : lessons } = state.lessons 
	return{
		lessons
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Lessons);