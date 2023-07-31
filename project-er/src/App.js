import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Rate from './Rate';

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<div className="container">
					<main>
						<Rate />
					</main>
				</div>
				<div className="container" id="cookie_info">
					<div className="site-content">
						<div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
							частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
							местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
					</div>
				</div>
				<Footer />
			</>
		)
	}
}


export default App;
