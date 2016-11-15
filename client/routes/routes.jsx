import React from 'react';
import Relay from 'react-relay';
import {Router, Route, browserHistory, applyRouterMiddleware} from 'react-router';
import useRelay from 'react-router-relay';
import ViewerQuery from './viewerQuery';

import PeopleSearch from '../components/people/peopleSearch';

const Routes = () => (
  <Router
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}>

    <Route path='/' component={PeopleSearch} queries={ViewerQuery}/>

    </Router>
);

export default Routes;