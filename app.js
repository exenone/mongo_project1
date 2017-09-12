var express=require('express');
var app=express();
var MongoClient = require('mongodb').MongoClient;
var db = "mongodb://localhost:27017/mydb";
var bodyParser = require('body-parser');
var path = require('path');



app.use(require('express-method-override')('method_override_param_name'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src/views')));
app.use(express.static(path.join(__dirname, 'bower_components')));

<<<<<<< HEAD
var urlencodedParser = bodyParser.urlencoded({ extended: false })
/*
app.post('/user', urlencodedParser, function (req, res) {
    res.send("Submitted user's name is: " + req.body.name);
});
*/


app.post('/insert', function(req, res){
  res.send("data inject is succesfull!!"+req.body.tree);  
});








const http = require('http');

const hostname = 'localhost';
const port = 3000;


  app.listen(port, hostname, (err) => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  