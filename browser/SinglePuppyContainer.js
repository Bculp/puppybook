import {connect} from 'react-redux';
import singlePuppy from './SinglePuppy';

const mapStateToProps = (state) => {
	return {
		singlePuppy: state.singlePuppy
	}
}

export default connect(mapStateToProps)(singlePuppy);

