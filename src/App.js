import React, { Component } from 'react'
import Home from './components/Home';
import './style.css';

class App extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 show: false
		}
	}
	
	handleOnClick = () => {
		this.setState( { show: ! this.state.show } ) // simple toggler
	}

	render() {
		return (
			<div>
				{ this.state.show && <Home name="ma4ine" /> }
				<button onClick={this.handleOnClick}>Click</button>
			</div>
		)
	}
}

export default App
