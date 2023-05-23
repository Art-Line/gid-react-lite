import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'site name',
			subtitle: 'subtitle',
			text: 'show',
			box: true,
		}
	}
	showText = () => {
		this.setState({
			text: 'hide'
		})
	}
	showBox = () => {
		this.setState({
			box: !this.state.box
		})
	}

	render() {
		return (
			<div className="App">
				<h1>{this.state.title}</h1>
				<p>{this.state.subtitle}</p>
				<p><button type="button" onClick={this.showText}>Show text</button></p>
				<p>{this.state.text}</p>
				<p><button type="button" onClick={this.showBox}>Show / hide box</button></p>
				{this.state.box && <p>user text in box</p>}
				
			</div>
		)
	}
}

export default App;
