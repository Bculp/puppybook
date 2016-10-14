const initialState = {
	allPuppies: [],
	singlePuppy: {}
};

const puppyReducer = (state = initialState, action) => {
	switch(action.type) {
		case "GET_PUPPIES" :
			return Object.assign({}, state, {
				allPuppies: action.puppies
			});
		case "GET_SELECTED_PUPPY" :
			return Object.assign({}, state, {
				singlePuppy: action.selectedPuppy
			})
		default: return initialState;
	}
}

export default puppyReducer;

