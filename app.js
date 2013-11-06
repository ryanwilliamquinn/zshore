var express = require('express');
var app = express();
var jade = require('jade');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(3000);

app.get('/', function(req, res) {
  res.render('home',
  { title: 'ZacharyShore.com' });
});

app.get('/publications', function(req,res) {
  res.render('publications',
  { title: 'ZacharyShore.com - publications' });
});

app.get('/about', function(req, res) {
  res.render('about',
  { title: 'ZacharyShore.com - about'});
});

app.get('/media', function(req,res) {
  res.render('media',
  { title: 'ZacharyShore.com - media'});
});
