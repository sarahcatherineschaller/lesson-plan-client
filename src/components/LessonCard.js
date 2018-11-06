import React, { Component } from 'react';

export const LessonCard = ({lesson}) => (
	<div key={lesson.id}>
		<h3>Title: {lesson.title}</h3>
		<p>Summary: {lesson.summary}</p>
	</div>

	)