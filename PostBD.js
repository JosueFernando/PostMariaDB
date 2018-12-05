const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio1",
  password: "servicio1.123",
  database: "empleado"
});

connection.connect();


app.post('/rest/empleado', function(req, res) {

  
  
   var nombre  = req.body;
   console.log(nombre);
   connection.query('INSERT INTO empleados SET ?', nombre, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


app.listen(7777, function () {
 console.log('Node app is running on port 7777');

});








