'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { getPuppiesFromServer } from './action-creators';
import  SinglePupCont from './SinglePuppyContainer';
import {getSelectedPuppyFromServer} from './action-creators';


const hardcodedPuppy = {
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};

const enterPuppies = function(nextRouterState) {
	store.dispatch(getPuppiesFromServer());
}

const enterSelectPuppy = function(nextRouterState) {
  store.dispatch(getSelectedPuppyFromServer(nextRouterState.params.puppyId));
}

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
      <Provider store={store}>
      <Router history={hashHistory}>
      	<Route path="/" onEnter={enterPuppies}>
	      	<Route path="puppies" component={AllPuppiesContainer}/>
          <Route path="puppies/:puppyId" component={SinglePupCont} onEnter={enterSelectPuppy} />
	      	<IndexRoute component={AllPuppiesContainer}/>
      	</Route>      	
  	  </Router>
  	  </Provider>
    </div>
  </div>,
  document.getElementById('app')
);
