export const GET_PUPPIES = "GET_PUPPIES";
export const GET_SELECTED_PUPPY = "GET_SELECTED_PUPPY";

export const getPuppies = function(puppies) {
	return {
		type: GET_PUPPIES,
		puppies
	}
}

export const getPuppiesFromServer = function() {
	return function(dispatch) {
		return fetch('/api/puppies')
		.then(res => res.json())
		.then(puppies => {
			const gottenPuppies = getPuppies(puppies);
			dispatch(gottenPuppies);
		})
		.catch(function(err) {
			console.error(err);
		});
	}
}

export const getSelectedPuppy = function(selectedPuppy) {
	return {
		type: GET_SELECTED_PUPPY,
		selectedPuppy
	}
}