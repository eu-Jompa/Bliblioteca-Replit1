var Parse = require('parse/node');
const express = require('express')
const app = express()


Parse.initialize("foGUBluZGrJCl64t9Hz2yADSSxeSe6nwVIIpHr2x","8uRogyXapcUlSILV71Tmtp5NOg5sDa9SEoaNN3Xa"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

app.get('/', function (req, res) {
  res.render('index.html');
})

app.listen(3000)