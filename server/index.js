const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use( express.static( path.join(__dirname, '../client/build/') ) );

app.use('/api', api);

app.get('/about', (req, res) => {
  res.render('pages/about');
});

// routes pour servir react app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(8080, (err) => {
  if(err) {
    throw(err);
  }

  console.log('server is running on http://localhost:8080');

});
