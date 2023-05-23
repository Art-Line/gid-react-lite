import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

class App extends React.Component {
	render() {
		let nav = this.props.nav;
		let contacts = this.props.contacts;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" width={100} height={100} />
					<h1>{this.props.siteName}</h1>
					<p>{this.props.text}</p>
					<Nav nav={nav} />
				</header>
				<main>
					main
				</main>
				<Footer contacts={contacts} address={this.props.address} siteName={this.props.siteName} />
			</div>
		);
	}
}

export default App;
