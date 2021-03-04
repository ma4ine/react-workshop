import React, { cloneElement, Component } from 'react'

class Home extends Component {

	constructor(props) {
		super(props);

		console.log('constructor called');
	
		this.state = {
			data: '',
			loading: true
		}
	}

	componentDidMount() {
		console.log('didMount called');
		fetch('https://jsonplaceholder.typicode.com/todos/1')
  		.then(response => response.json())
  		.then(json => {
				// console.log( 'data', json );
				this.setState( { 
					data: json,
					loading: false
				} );
			})
	}

	componentWillUnmount() {
		console.log('Component Unmounted');
	}

	renderData = () => {
		const mydata = this.state.data;
		if ( mydata.id ) {
			return (
				<div>
					<h1>Title : { mydata.title }</h1>
					<p>With the id : { mydata.id }</p>
				</div>
			)
		} else {
			return <p>{ this.state.loading && 'Loading...' }</p>
		}
	}

	render() {
		console.log('render is called');
		// console.log( 'rendered', this.props );
		return(
			<div>
				{/* <button onClick={ this.handleOnClick }>Click me!</button> */}
				{ this.renderData() }
			</div>
		)
	}
}

export default Home
