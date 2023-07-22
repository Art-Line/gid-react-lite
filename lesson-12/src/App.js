import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			count: 0,
		}
		this.winnerLine = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		]
	}


	isWinner = () => {
		let current = (this.state.count % 2 === 0) ? '×' : 'o';
		for(let i = 0; i< 8; i++) {
			let line = this.winnerLine[i];
			if(this.state.squares[line[0]] ===  current && this.state.squares[line[1]] ===  current && this.state.squares[line[2]] ===  current) {
				alert(current + ' win');
				setTimeout(() => {
					this.setState({
						squares: Array(9).fill(null),
						count: 0,
					})
				}, 2000)
			}
		}
	}


	clickHandler = event => {
		let data = event.target.getAttribute('data');
		let currentSquares = this.state.squares;
		if (currentSquares[data] === null) {
			currentSquares[data] = (this.state.count % 2 === 0) ? '×' : 'o';
			this.setState({
				squares: currentSquares,
				count: this.state.count + 1
			})
		}
		this.isWinner();
	}

	render() {
		return (
			<div className="container">
				<h1 className="title">tic-tac-toe</h1>
				<div className="tic-tac-toe">
					<div className="tic-item" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>

				</div>
			</div>
		)
	}
}
export default App;
