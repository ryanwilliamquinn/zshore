var express = require('express');
var app = express();
var jade = require('jade');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'));

app.use(app.router);

app.listen(3000);

var titleText = 'ZacharyShore.com - ';

app.get('/', function(req, res) {
  res.render('home',
  { title: 'ZacharyShore.com' });
});

app.get('/publications', function(req,res) {
  res.render('publications',
  { title: titleText + 'publications' });
});

app.get('/about', function(req, res) {
  res.render('about',
  { title: titleText + 'about'});
});

app.get('/media', function(req,res) {
  res.render('media',
  { title: titleText + 'media'});
});

app.get('/a-sense-of-the-enemy', function(req,res) {
  res.render('sense',
  { title: titleText + 'A Sense of the Enemy' });
});

app.get('/blunder', function(req, res) {
  res.render('blunder',
  {title: titleText + 'Blunder'});
})

app.get('/breeding-bin-ladens', function(req, res) {
  res.render('breedingBinLadens',
    {title: titleText + 'Breeding Bin Ladens'});
})

app.get('/what-hitler-knew', function(req, res) {
  res.render('whatHitlerKnew',
    {title: titleText + 'What Hitler Knew'});
})

app.use(function(req, res, next) {
  res.status(404);

  if (req.accepts('html')) {
    res.render('404', {url: req.url});
    return;
  }

  if (req.accepts('json')) {
    res.send({ error: 'Not found'})
    return;
  }

  res.type('txt').send('Not found');
})