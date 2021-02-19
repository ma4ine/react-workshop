import React, { Component } from 'react'
import Home from './components/Home';
import Nav from './components/Nav';

export class App extends Component {

	formatName = ( user ) => {
		return `Super human ${user}`
	};

	render() {

		// constructor(props) {
		// 	super(props)
		
		// 	this.state = {
				 
		// 	}
		// }
		

		// example one
		const element = <h1>Hello World</h1>;

		// example two
		const name = 'Josh perez';
		const elementTwo = <h1>Hello { name }</h1>;

		// example three
		const elementThree = (
			<div className="my-class">
				<h1>
					Hello { this.formatName( 'ma4ine' ) }
				</h1>
			</div>
		)

		// example four
		const myUser = {
			avatarUrl: 'https://via.placeholder.com/150'
		}

		const elemetFour = <img src={ myUser.avatarUrl } alt="My Image"/>
		
		const myName = 'ma4ine';
		const data = {
			url: 'https://google.com'
		}

		return (	

			<div>
					My App Component
					{ element }
					{ elementTwo }
					{ elementThree }
					{ elemetFour }
					<br/>
					<br/>
					Home
					<Home name={ myName  } myData={ data } />
					<Nav name="Shawn" />
			</div>
		)
	}
}

export default App