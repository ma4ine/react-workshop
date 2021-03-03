import React, { cloneElement, Component } from 'react'

class Home extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 age: ''
		}
	}

	handleOnClick = () => {
		this.setState( { 
			age: 35 
		} )
	}

	getSnapshotBeforeUpdate( prevProps, prevState ) {
		console.log('getSnapshotBeforeUpdate called');
		console.log('prevProps', prevProps);
		console.log('prevState', prevState);
		return 'xyz';
	}

	componentDidUpdate( prevProps, prevSate, snapshot ) {
		console.log('componentDidUpdate called');
		console.log('snapshot', snapshot)
	}

	render() {
		console.log('render is called');
		console.log( 'rendered', this.props );
		return(
			<div>
				<button onClick={ this.handleOnClick }>Click me!</button>
			</div>
		)
	}
}

export default Home
