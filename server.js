import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path'
const app = express();
app.use('/static', express.static(path.resolve(__dirname, 'public')))
const PORT = process.env.PORT || 3000;

import Home from './component';


import { Helmet } from 'react-helmet';

app.get('/', function(req, res) {
  const helmet = Helmet.renderStatic();
  const html = ReactDOMServer.renderToStaticMarkup(<Home />);
  res.send(`
  <!DOCTYPE html />
  <html>
  <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
  </head>
  <body>
  <div id="app">${html}</div>
  </body>
  <script src="/static/client.js"></script>
  <script src="/static/vendors~client.js"></script>
  </html>
    `);
});

app.listen(PORT, () => console.log('Running in 3000'));
