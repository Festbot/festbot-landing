import {  combineReducers } from 'redux';

import ReducerMenu from './reducer_menu.js';
import ReducerArtists from './reducer_artists.js';


const rootReducer = combineReducers({
	menu: ReducerMenu,
	artists: ReducerArtists
});

export default rootReducer;