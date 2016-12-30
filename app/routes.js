import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import List from './components/List';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={List} />
		<Route path="/about" component={About} />
	</Route>
);
