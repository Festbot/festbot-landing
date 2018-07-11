import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReducerMenu from './ReducerMenu.js';
import ReducerArtists from './ReducerArtists.js';

const rootReducer = combineReducers({
	menu: ReducerMenu,
	artists: ReducerArtists
});

const store = createStore(rootReducer);

export default store;
