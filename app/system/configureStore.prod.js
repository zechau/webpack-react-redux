import { createStore } from 'redux';
import rootReducer from '../reducers';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const allReducer = combineReducers(Object.assign({}, rootReducer, {
    routing
}));
export default function configureStore(initialState) {
    return createStore(
        allReducer,
        initialState
    );
}
