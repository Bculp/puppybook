import {connect} from 'react-redux';
import singlePuppy from './SinglePuppy';
// import {getPuppiesFromServer} from './action-creators';

const mapStateToProps = (state) => {
	return {
		singlePuppy: state.singlePuppy
	}
}

export default connect(mapStateToProps)(singlePuppy);

