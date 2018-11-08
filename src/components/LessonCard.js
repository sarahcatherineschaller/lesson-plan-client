import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import DeleteLesson from '../containers/DeleteLesson';

export const LessonCard = ({lesson}) => (

	<Card className="card" key={lesson.id}>
		<Col sm="12">
		
		<CardBody>
			<DeleteLesson history={lesson.history} lesson={lesson} />
			<h5><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></h5>
			<CardText>Grade Level: {lesson.grade_level}</CardText>
			<CardText>Subject: {lesson.subject}</CardText>
			<CardText>Total Time: {lesson.total_time}</CardText> 
			<CardText>{lesson.summary}</CardText>
		</CardBody>
		
		</Col>
	</Card>

)