var express = require('express');
var app = express();

app.use(express.static(__dirname + '/docs'));
console.log('Listening on 3000');

app.listen(3000);