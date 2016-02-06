var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
var user = require('./controllers/user');
var post = require('./controllers/post');
var config = require('./config');

mongoose.connect('mongodb://localhost/blog');

app.get('/user', user.get);
app.post('/user', user.post);
app.patch('/user/:id', user.update);
app.delete('/user/:id', user.delete);

app.use(cors());

app.listen(3000);