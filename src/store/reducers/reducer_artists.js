import {
	UPDATE_ARTIST_LIST,
	UPDATE_FILTERED_ARTIST_LIST,
	SET_GENRE_FILTER,
	SET_ARTIST_FOR_DETAILS,
} from '../actions/actionTypes.js'

const initialState = {
	artistList: [],
	filteredResult:[],
	activeGenre:"pop",
	activeArtist: {
		name:'Dubrelation feat Theo',
		spotify:"5k6QoV97lAf994olT5aJjM",
		genres:["Deep House", "House", "Tropical", "Techno", "Minimal", "Deep"]
},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ARTIST_LIST:
		return {
			...state,
			artistList: action.payload
		};
		break;
		case UPDATE_FILTERED_ARTIST_LIST:
		return {
			...state,
			filteredResult: action.payload
		};
		break;
		case SET_GENRE_FILTER:
		return {
			...state,
			activeGenre: action.payload
		};
		break;
		case SET_ARTIST_FOR_DETAILS:
		return {
			...state,
			activeArtist: action.payload
		};
		break;
	}
	return state;
};

export default reducer;
