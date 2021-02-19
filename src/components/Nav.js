import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact-us">Contact Us</Link>
		</div>
	)
}

export default Nav
