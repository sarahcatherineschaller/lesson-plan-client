import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import DeleteLesson from '../containers/DeleteLesson';
import { likeLesson } from '../actions/lessons';
import { connect } from 'react-redux';

class LessonCard extends Component {
	// constructor(props) {
	// 	super(props) 
	// 	this.state = {
	// 		likes: this.props.lesson.likes,
	// 	}
	// }

	// handleOnClick = () => {
	// 	this.setState({
	// 		likes: this.state.likes + 1
	// 	})
	// }

	handleOnClick = (lesson) => {
		const updatedLesson = Object.assign({}, lesson, { likes: lesson.likes + 1 })
		this.props.likeLesson(updatedLesson)
	}



	render() {
		const { lesson } = this.props;

		return(
		<Card className="card" key={lesson.id}>
		<Col sm="12">
		
		<CardBody>
			<DeleteLesson history={lesson.history} lesson={lesson} />

			<h5><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></h5>
			<CardText>Grade Level: {lesson.grade_level}</CardText>
			<CardText>Subject: {lesson.subject}</CardText>
			<CardText>Total Time: {lesson.total_time}</CardText> 
			<CardText>{lesson.summary}</CardText>

			<Button onClick={() => this.handleOnClick(lesson)}>Like</Button> 
			<h5>{this.props.lesson.likes}</h5>

			
			

		</CardBody>
		
		</Col>
	</Card>
		)
	}
}


export default connect(null, { likeLesson })(LessonCard);