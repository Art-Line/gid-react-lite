import React from 'react';
import './App.css';

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			btnText: '',
			count: 0,
			text: '',
			boxWidth: 250,
			range: 0,
			dropdown: false
		}
	}

	btnWork = () => {
		console.log('button work');
		this.setState({
			btnText: 'button work',
		})
	}

	btnCount = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}

	btnResetCount = () => {
		this.setState({
			count: 0,
		})
	}

	move = () => {
		console.log('move')
	}

	btnData = (e) => {
		console.log(e.target.dataset.atr)
	}

	textToDiv = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	checkbox = (e) => {
		console.log(e.target.checked ? 'checkbox checked' : 'checkbox unchecked')
	}

	checkboxSecond = (e) => {
		console.log(e.target.value)
	}

	selectVal = (e) => {
		console.log(e.target.value)
	}

	addWidth = () => {
		this.setState({
			boxWidth: this.state.boxWidth + 3
		})
	}

	resetWidth = () => {
		this.setState({
			boxWidth: 250
		})
	}

	changeRange = (e) => {
		this.setState({
			range: e.target.value
		})
	}

	dropDown = (e) => {
		this.setState({
			dropdown: !this.state.dropdown
		})
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.btnWork}>button</button>
				<p>{this.state.btnText}</p>
				<hr />
				<button onClick={this.btnCount}>count</button>
				<button onClick={this.btnResetCount}>ResetCount</button>
				<p>{this.state.count}</p>
				<hr />
				<div onMouseMove={this.move} style={{backgroundColor: 'green', width: '250px'}}>move</div>
				<hr />
				<button data-atr="atr-1" onClick={this.btnData}>atr1</button>
				<button data-atr="atr-2" onClick={this.btnData}>atr2</button>
				<hr />
				<input type='text' onChange={this.textToDiv} value={this.state.text} />
				<div>{(this.state.text.length > 6) ? this.state.text : 'text length less than 6 characters'}</div>
				<hr />
				<input onClick={this.checkbox} type="checkbox" />
				<hr />
				<input onClick={this.checkboxSecond} type="checkbox" value={'one'} />
				<input onClick={this.checkboxSecond} type="checkbox" value={'two'} />
				<input onClick={this.checkboxSecond} type="checkbox" value={'three'} />
				<hr />
				<select onChange={this.selectVal}>
					<option value={'one'}>one</option>
					<option value={'two'}>two</option>
					<option value={'three'}>three</option>
				</select>
				<hr />
				<div style={{backgroundColor: 'green', height: '250px', width: this.state.boxWidth + 'px'}}></div>
				<button onClick={this.addWidth} type="button">add width</button>
				<button onClick={this.resetWidth} type="button">reset width</button>
				<hr />
				<input onChange={this.changeRange} value={this.state.range} type='range' />
				<p>{this.state.range}</p>
				<hr />
				<button onClick={this.dropDown} type='button'>show/hide box</button>
				{this.state.dropdown && <p>box</p>}
			</div>
		);
	}
}

export default App;
