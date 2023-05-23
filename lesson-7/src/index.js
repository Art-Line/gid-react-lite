import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const siteName = "site Name";
const nav = {
	main: '/index',
	about: '/about',
	contact: '/contact',
	blog: '/blog',
}
const contacts = ['+1 438 123 45 56', '+1 438 123 45 98']
const address = ['Kyiv', 'pobedi', 123]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App 
			siteName={siteName} 
			text={'description'} 
			nav={nav} 
			contacts={contacts} 
			address={address} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
