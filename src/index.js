import React from 'react'
import ReactDOM from 'react-dom'
import {Router,
		Route,
		hashHistory } from 'react-router'

import App from './components/App'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

import './styles/bootstrap.css'
//import './index.css'

const Components=(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="home" component={Home}></Route>
			<Route path="about" component={About}></Route>
			<Route path="contact" component={Contact}></Route>
		</Route>
	</Router>
);

ReactDOM.render(Components, document.getElementById('root'));