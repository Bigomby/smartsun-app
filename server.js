const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const fs = require('fs');

const app = express();
app.use(serveStatic(path.join(__dirname, 'dist/spa-mat')));

app.get('*', (req, res) => {
  fs.readFile(
    path.join(__dirname, 'dist/spa-mat/index.html'),
    'utf-8',
    (err, content) => {
      if (err) {
        console.log('Cannot open "index.html" file.');
      }

      res.end(content);
    },
  );
});

const port = process.env.PORT || 5000;
app.listen(port);
