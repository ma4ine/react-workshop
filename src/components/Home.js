import React, { Component } from 'react'

export class Home extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 number: 0
		}
	}
	

	componentDidMount() {
		this.myInterval = setInterval( () => {
			this.setState( { number: 0 } )
		}, 1000 )
	}

	shouldComponentUpdate( nextProps, nextState ) {
		if ( nextState.number === this.state.number ) {
				return false;
		} else {
			return true;
		}
	}

	componentWillUnmount() {
		clearInterval( this.myInterval )
	}

	render() {
		console.log('rendered', this.state);
		return (
			<div>
				This is home
			</div>
		)
	}
}

export default Home
