import { combineReducers } from 'redux';
import launches from './launches';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
    launches,
    routing: routerReducer
});
