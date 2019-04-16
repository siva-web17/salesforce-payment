import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();
const PORT = process.env.PORT || 3000;

import Home from './component';

import bodyParser from 'body-parser';
import { Helmet } from 'react-helmet';

app.use(bodyParser.json());
app.use(express.static('build/public')); // To Block User

const renderFullPage = (html, helmet) => {
  return `
    <!DOCTYPE html />
    <html>
    <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
    </head>
    <body>
    <div id="app">${html}</div>
    </body>
    <script src='client_bundle.js'></script>
    </html>
      `;
};

app.get('*', function(req, res) {
  const helmet = Helmet.renderStatic();
  const html = ReactDOMServer.renderToStaticMarkup(<Home />);

  res.send(renderFullPage(html, helmet));
});

app.listen(PORT, () => console.log('Running in 3000'));
