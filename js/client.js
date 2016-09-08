import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from "./pages/Layout";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Home from "./pages/Home";
import Query from "./pages/Query";

const app = document.getElementById('app');//get elem id

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about" component={About}></Route>
			<Route path="feature" component={Feature}></Route>
			<Route path="query(/:query)" component={Query}></Route>
		</Route>
	</Router>
, app);//render it to your html