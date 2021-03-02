import React, { Component } from 'react'

class Home extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 name: ''
		}
	}
	

	handleOnClick = () => {
		this.setState( { name: 'Richa' } )
	}

	render() {
		console.log( 'rendered', this.props );
		return(
			<div>
				<button onClick={ this.handleOnClick }>Click me!</button>
			</div>
		)
	}
}

export default Home
