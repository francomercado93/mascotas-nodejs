const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

let apiRoutes = require('./api-routes');

// Body - parser enables your app to parse data from incoming request like 
// form data via urlencode. We need to import this to our app and use them.
let bodyParser = require('body-parser');

let mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

var db = mongoose.connection;

if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


app.use('/api', apiRoutes);

app.get('/', (req, res) =>
    res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});