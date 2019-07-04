
var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'index.html'));
});
 
app.get('/login', function (req, res) {
     res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(8000);

//NOTES:
// This part of the Modul control Electronic Panel
// All links for the Electronic menu are kept in this area.
// Our aim is to make simplification
// The most important part is to export the modules and functions. Otherwise, other files can not read them.
// You need to give PATH in each JS files if the JS files are related together.



