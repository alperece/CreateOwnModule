var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')))

// We made simplification
// What I want is to get these two functions from the "electronicController" and not from this page
// we will seperate the paths and functions now
// It makes more sense to put relevant links and redirections in the similar files. (Organized Files)
// Therefore, we need to define a module for this
// modul is a javascript file
// we create an object named './ElectronicController' !!! ctrlElectronic is an OBJECT

var electronic=function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
}
var computer=function(req,res){
    res.sendFile(path.join(__dirname,'login.html'));
}
app.get('/electronic', electronic);
app.get('/electronic/computer',computer);

app.listen(8000);





