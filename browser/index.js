'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { getPuppiesFromServer } from './action-creators';
import  SinglePupCont from './SinglePuppyContainer';



// function enterPuppies(){
// 	return this.props.loadAllPuppies()
// }

const enterPuppies = function(nextRouterState) {
	// console.log("nextRouterState from enterPuppies: ", nextRouterState);
	store.dispatch(getPuppiesFromServer());
}

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
      <Provider store={store}>
      <Router history={hashHistory}>
      	<Route path="/" onEnter={enterPuppies}>
	      	<Route path="puppies" component={AllPuppiesContainer}/>
          <Route path="puppies/:puppyId" component={SinglePupCont} />
	      	<IndexRoute component={AllPuppiesContainer}/>
      	</Route>      	
  	  </Router>
  	  </Provider>
    </div>
  </div>,
  document.getElementById('app')
);