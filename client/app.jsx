import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import Routes from './routes/routes';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8080/graphql')
);

ReactDOM.render(<Routes/>, document.getElementById('app'));