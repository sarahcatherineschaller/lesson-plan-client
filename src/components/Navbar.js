import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css'


const Navbar = () => {
	return (
		<div>
			<Link to='/'>Home</Link>{" | "}
			<Link to='/about'>About</Link>{" | "}
			<Link to='/contact'>Contact</Link>{" | "}
			<Link to='/lessons'>Lessons</Link>{" | "}
			<Link to='/lessons/new'>Create</Link>

		</div>
	)
}

export default Navbar;