import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteLesson } from '../actions/lessons';
import DeleteButton from '../components/DeleteButton';
import { UncontrolledCollapse, Button } from 'reactstrap';

class DeleteLesson extends Component {

	handleOnClick = () => {
		this.props.deleteLesson(this.props.lesson.id, this.props.history)
	}
	debugger

	render() {
		return(
			<div onClick={this.handleOnClick}>
				<DeleteButton />
			</div>
		)
	}
}

export default connect(null, { deleteLesson })(DeleteLesson);