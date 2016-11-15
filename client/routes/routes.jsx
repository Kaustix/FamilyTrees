import React from 'react';
import Relay from 'react-relay';
import {Router, Route, browserHistory, applyRouterMiddleware} from 'react-router';
import useRelay from 'react-router-relay';
import ViewerQuery from './viewerQuery';

import Layout from '../layouts/layout';
import PeopleSearch from '../components/people/peopleSearch';

const Routes = () => (
  <Router environment={Relay.Store} render={applyRouterMiddleware(useRelay)} history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={PeopleSearch} queries={ViewerQuery}/>
      <Route path="/otherstuff" component={PeopleSearch}/>
    </Route>
  </Router>
);

export default Routes;