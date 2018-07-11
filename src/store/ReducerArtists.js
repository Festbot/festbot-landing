import {UPDATE_ARTIST_LIST} from './actionTypes.js'

const initialState = {
	artistList: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ARTIST_LIST:
		return {
			...state,
			artistList: action.payload
		};
	}
	return state;
};

export default reducer;
