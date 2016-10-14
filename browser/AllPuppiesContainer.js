import {connect} from 'react-redux';
import allPuppies from './AllPuppies';
import {getPuppiesFromServer} from './action-creators';

const mapStateToProps = (state) => {
	return {
		allPuppies: state.allPuppies
	}
}

// const mapDispatchToProps = (dispatch) => {

//  	return {
// 	 		loadAllPuppies: function() {
// 		 		// const action = getPuppies(hardCodedData)
// 		 		// dispatch(action);
// 		 		dispatch(getPuppiesFromServer());
//  			}
//  	}
//  }

export default connect(mapStateToProps)(allPuppies);

