var path = require('path');

module.exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
}

module.exports.computer = function (req, res) {
    res.sendFile(path.join(__dirname, 'login.html'));
}

//NOTES:
// This part of the Modul control Electronic Panel
// All links for the Electronic menu are kept in this area.
// Our aim is to make simplification
// The most important part is to export the modules and functions. Otherwise, other files can not read them.
// You need to give PATH in each JS files if the JS files are related together.

// To TEST the controller if it works use below code:
// module.exports = function (comment) {
//     console.log("Electronic Controller Calling!" + comment);
// }







