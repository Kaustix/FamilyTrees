import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import historyApiFallback from 'connect-history-api-fallback';

import schema from './schema/schema';
import * as Database from './database';
import config from './config';

Database.Connect();

if (config.env === 'development') {
  //start graphql server
  const graphql = express();
  graphql.use('/graphql', graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true
  }));
  graphql.listen(config.graphql.port, () => {
    console.log(`GraphQL is listening on Port ${config.graphql.port}`);
  });

  //start relay server
  const relayServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '/build/',
    proxy: {
      '/graphql': `http://localhost:${config.graphql.port}`
    },
    stats: {colors: true},
    hot: true,
    historyApiFallback: true
  });

  relayServer.use('/', express.static(path.join(__dirname, '../build')));
  relayServer.listen(config.port, () => {
    console.log(`Relay is listening on Port ${config.port}`);
  });
} else if (config.end === 'production') {
  const relayServer = express();
  relayServer.use(historyApiFallback());
  relayServer.use('/', express.static(path.join(__dirname, '../build')));
  relayServer.use('/graphql', graphQLHTTP({schema}));
  relayServer.listen(config.port, () => {
    console.log(`Relay is listening on port ${config.port}`)
  });
}






