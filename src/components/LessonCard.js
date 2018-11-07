import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export const LessonCard = ({lesson}) => (
	<Card key={lesson.id}>
		<Col sm="12">
		
		<CardBody>
			<CardTitle>{lesson.title}</CardTitle>
			<CardSubtitle>Grade Level: {lesson.grade_level}</CardSubtitle>
			<CardSubtitle>Subject: {lesson.subject}</CardSubtitle>
			<CardText>{lesson.summary}</CardText>
		</CardBody>
		
		</Col>
	</Card>

	)