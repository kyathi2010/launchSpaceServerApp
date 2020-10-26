import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/home';

export default (
	<Router>
		<Route path='/' component={Home} />
	</Router>
);
