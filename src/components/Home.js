import React, { Component } from 'react'

class Home extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 name: 'ma4ine'
		}
	}
	

	static getDerivedStateFromProps( props, state ) {
		console.log( 'getDerivedStateFromProps is called' );
		console.log( 'props', props );
		console.log( 'state', state );
		return null;
	}

	handleClickEvent = () => {
		// this.setState( { name: 'Ryan' } ); // set state method
		this.forceUpdate( () => {
			console.log('The component is update');
			this.setState( { name: 'Irene' } )
		} )
	}

	render() {
		console.log( 'render is called' );
		return (
			<div>
				 <button onClick={this.handleClickEvent}>Click</button>
			</div>
		)
	}
}

export default Home
