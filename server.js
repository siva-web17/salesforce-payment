import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
const app = express();
app.use('/static', express.static(path.resolve(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
import Redirection from './client/Redirection';
import { Helmet } from 'react-helmet';

app.get('/', function(req, res) {
  const helmet = Helmet.renderStatic();
  const html = ReactDOMServer.renderToStaticMarkup(<Redirection />);
  res.send(`
  <!DOCTYPE html />
  <html>
  <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  </head>
  <body>
  <div id="app">${html}</div>
  </body>
  <script src="/static/client.js"></script>
  <script src="/static/vendors~client.js"></script>
  </html>
    `);
});

app.get('*', function(req, res) {
  res.send(`
  <!DOCTYPE html />
  <html>
  <head>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  </head>
  <body>
  <div id="404"><h1>Not found</h1></div>
  </body>
  </html>
    `);
});
app.listen(PORT, () => console.log(`Running in ${PORT}`));
