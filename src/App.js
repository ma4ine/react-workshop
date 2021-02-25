import React, { Component } from 'react'
import Home from './components/Home';
import Nav from './components/Nav';
import { Router } from '@reach/router';
import About from './components/About';
import ContactUs from './components/ContactUs';
import './style.css';

export class App extends Component {
	render() {
		return (
			<Router>
				<Home path="/" />
				<About path="/about" />
				<ContactUs path="/contact-us" />
			</Router>
		)
	}
}

export default App
