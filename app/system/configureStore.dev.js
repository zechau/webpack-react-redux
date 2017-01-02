import { createStore } from 'redux';
import DevTools from './DevTools';
import rootReducer from '../reducers';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const allReducer = combineReducers(Object.assign({}, rootReducer, {
    routing
}));

export default function configureStore(initialState) {
    const store = createStore(
        allReducer,
        initialState,
        DevTools.instrument()
    );

    return store;
}
