import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
	return (
		<div className="nav">
			<Link to="/" className="nav--link">Home</Link>
			<Link to="/about" className="nav--link">About</Link>
			<Link to="/contact-us" className="nav--link">Contact Us</Link>
		</div>
	)
}

export default Nav
