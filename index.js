const express = require('express');
const graphiql = require('graphql-server-express');
const app = express();

app.use('/', graphiql.graphiqlExpress({
  endpointURL: process.env.API_URL
}));

process.on('exit', function () {
  console.log('About to exit, waiting for remaining connections to complete');
  app.close();
});

app.listen(4000);

