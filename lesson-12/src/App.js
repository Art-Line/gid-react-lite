import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			count: 0,
			win: null,
			disabledField: true,
			disabledChoose: false,
			firstSign: 1,  // x = 1, o = 0
		}
		this.winnerLine = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
	}


	isWinner = (current) => {
		for (let i = 0; i < 8; i++) {
			let line = this.winnerLine[i];
			if (this.state.squares[line[0]] === current && this.state.squares[line[1]] === current && this.state.squares[line[2]] === current) {
				this.setState({
					win: current + ' win',
					disabledField: true,
				})
			} else if (this.state.count === 8) {
				this.setState({
					win: 'dead heat',
					disabledField: true,
				})
			}
		}
	}


	clickHandler = event => {
		let data = event.target.getAttribute('data');
		let currentSquares = this.state.squares;

		let first = '×';
		let second = 'o';
		if (this.state.firstSign !== 1) {
			first = 'o';
			second = '×';
		}

		if (currentSquares[data] === null) {
			currentSquares[data] = (this.state.count % 2 === 0) ? first : second;
			this.setState({
				squares: currentSquares,
				count: this.state.count + 1
			})
		}
		this.isWinner(currentSquares[data]);
	}

	newGame = () => {
		this.setState({
			squares: Array(9).fill(null),
			count: 0,
			win: null,
			disabledField: false,
			disabledChoose: false
		})
	}

	chooseSign = event => {
		let firstSign = parseInt(event.target.getAttribute('data'));
		this.setState({
			firstSign: firstSign,
			disabledField: false,
			disabledChoose: true
		})
	}

	render() {
		return (
			<div className="container">
				<h1 className="title">tic-tac-toe</h1>
				<div className={`choose ${(this.state.disabledChoose) ? 'choose_disabled' : ''}`}>
					<div className="choose__title">Choose your sign:</div>
					<div className="choose__buttons">
						<button type="button" className={`choose-btn ${(this.state.firstSign === 1) ? 'active' : ''}`} onClick={this.chooseSign} data="1">×</button>
						<button type="button" className={`choose-btn ${(this.state.firstSign === 0) ? 'active' : ''}`} onClick={this.chooseSign} data="0">o</button>
					</div>
				</div>
				<div className={`tic-tac-toe ${this.state.disabledField ? 'tic-tac-toe_disabled' : ''}`}>
					<div className="tic-item" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
					<div className="tic-item" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
					{this.state.win &&
						<div className="result">
							<div className="result__text">{this.state.win}</div>
							<button className="result__btn" type="button" onClick={this.newGame}>New game</button>
						</div>
					}
				</div>
			</div>
		)
	}
}
export default App;
