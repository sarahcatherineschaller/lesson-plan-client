import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const LessonCard = ({lesson}) => (
	<Card className="card" key={lesson.id}>
		<Col sm="12">
		
		<CardBody>
			<h5><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></h5>
			<CardSubtitle>Grade Level: {lesson.grade_level}</CardSubtitle>
			<CardSubtitle>Subject: {lesson.subject}</CardSubtitle>
			<CardText>{lesson.summary}</CardText>
		</CardBody>
		
		</Col>
	</Card>

	)