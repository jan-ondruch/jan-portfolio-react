import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App'
import Contact from './src/Contact'
import Freetime from './src/Freetime'
import MarketPromo from './src/MarketPromo'
import Profile from './src/Profile'
import Programming from './src/Programming'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Profile}></IndexRoute>
			<Route path="contact" component={Contact}></Route>
			<Route path="freetime" component={Freetime}></Route>,
			<Route path="marketPromo" component={MarketPromo}></Route>,
			<Route path="profile" component={Profile}></Route>,
			<Route path="programming" component={Programming}></Route>,
		</Route>
	</Router>,
	document.getElementById('app')
)