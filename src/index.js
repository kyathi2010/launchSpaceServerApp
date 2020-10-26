import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware,composee } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import thunk from 'redux-thunk';
import Home from './components/home';
import { fetchAllData } from './actions/launchAction'
import routes from './routes';
import AppRoute from "./AppRoute";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(
	  applyMiddleware(thunk)
	)
  );
store.dispatch(fetchAllData())
render(
	<Provider store={store}><AppRoute /></Provider>,
	document.getElementById('app')
);

if(process.env.NODE_ENV == 'development' && module.hot) {
	module.hot.accept('./reducers', () => {
		store.replaceReducer(require('./reducers').default);
	});
}
