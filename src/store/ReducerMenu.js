import {UPDATE_PLATFORM} from './actionTypes.js'
import * as T from '../helpers/i18n.js';

T.setLanguage();

const initialState = {
	selectedPlatform: T.translate('Available platforms')
};


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_PLATFORM:
			return {
				...state,
				selectedPlatform: action.payload
			};
	}
	return state;
};

export default reducer;
