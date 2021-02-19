import React, { Component } from 'react'

export class Home extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 jobTitle: 'Web Developer',
			 newData: ''
		}

		// ES5 issue
		// this.handleOnClickButton = this.handleOnClickButton.bind( this ); 
	}

	// handleOnClickButton() {
		// this.setState( { jobTitle: 'Web Developer' } );
	// }

	handleOnClickButton = () => {
		// First method
		// this.setState( { jobTitle: 'Web Developer' }, () => {
		// 	console.log('Now the state is set');
		// } );
		// Second method
		this.setState( ( state, props ) => {
			return {
				newData: `${props.name} is a ${state.jobTitle}`
			}
		} )
	}

	render() {

		return (
			<div>
				This is Home, { this.props.name } 
				<br/>
				<a href={ this.props.myData.url }>Go to Google</a>
				<p>My job title : { this.state.jobTitle }</p>
				{/* Reffer to class (ES5) */}
				{/* <button onClick={ this.handleOnClickButton.bind( this ) }>Set job title</button> */}
				<p>{ this.state.newData }</p>
				<button onClick={ this.handleOnClickButton }>Set job title</button>
			</div>
		)
	}
}

export default Home
