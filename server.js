var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var helmet = require('helmet');

const config = require('./config/config');

mongoose.Promise = global.Promise;
mongoose.connect( config.database );
mongoose.connection.on('connected', () => {
	console.log('Connected to database: '+ config.database);
});

mongoose.connection.on('error', ( err ) => {
	console.log('Database error: '+ err);
});

const movies = require('./routes/movies.js');

const app = express();
app.use(helmet());

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use( cors() );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', movies);

app.get('/', function( req, res, next ) {
	res.sendFile( path.join(__dirname, 'dist/index.html') );
});

app.get('*', function( req, res, next ){
	res.sendFile( path.join(__dirname, 'dist/index.html') );
});

var server = app.listen(process.env.PORT || 3000, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});
