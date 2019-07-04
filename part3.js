var fs = require('fs');
var express = require('express');
// You need to give PATH in each JS files if the JS files are related together.
var path = require('path');

// If we have some problems with this code: var ctrlElectronic = require('./ElectronicController');
// we can define path like this : var ctrlElectronic = require(path.join(__dirname, 'deneme'));
// We've linked 2 different JS files.
// Just to read './ElectronicController', it has to be exported from controller.
var ctrlElectronic = require('./ElectronicController');

var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/electronic', ctrlElectronic.index);
app.get('/electronic/computer', ctrlElectronic.computer);

app.listen(8000);

//NOTES:
// Our aim is to make simplification

// Example:
// We define Class at first as below: 
// var ctrlElectronic = require('./ElectronicController'); 
// Then, we made Object as below:
//var objectElectronic = ctrlElectronic('Hello');




