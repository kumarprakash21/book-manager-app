var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// ✅ FIX: add this line
global.crypto = require('crypto');

var app = express();


mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Books')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

require('./app/routes')(app);

app.listen(80, function() {
    console.log('Server up: http://localhost:80');
});
