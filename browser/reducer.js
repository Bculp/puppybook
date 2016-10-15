import {combineReducers} from 'redux';
import {GET_PUPPIES, GET_SELECTED_PUPPY} from './action-creators';

// const initialState = {
// 	allPuppies: [],
// 	singlePuppy: {}
// };

const allPuppiesReducer = (state = [], action) => {
	switch(action.type) {
		case GET_PUPPIES :
			return action.puppies
		default: return state;
	}
}

const selectedPuppyReducer = (state = {}, action) => {
	switch(action.type) {
		case GET_SELECTED_PUPPY :
			return action.selectedPuppy
		default: return state;
	}
}

const rootReducer = combineReducers({
	allPuppies: allPuppiesReducer,
	singlePuppy: selectedPuppyReducer
})

export default rootReducer;
