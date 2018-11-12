import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
	return (
		<div>
			<h1>Welcome To Your Classroom</h1>
			<Link to={`/lessons`}>Lesson Plans</Link>{' | '}
			<Link to={`/lessons/new`}>Create A New Lesson Plan</Link>
		</div>
	)
}

export default Home;