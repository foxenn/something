var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp',({useMongoClient: true}));

var Item = require('./models/model');

var app = express();

//middlewares
app.set('port', process.env.PORT || 8080);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//routes
var item = require('./routes/index');
app.use('/', item);


//server
app.listen(app.get('port') , function(err){
	if (err) throw err;
	console.log('Hey Babe, I\'m at '+ app.get('port'));
})
