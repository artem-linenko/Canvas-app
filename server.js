var express = require('express');
var app = express();

// Support static pages
app.use(express.static(__dirname + '/public', {extensions: ['htm', 'html']})); // defined default extensions

app.listen(3000);