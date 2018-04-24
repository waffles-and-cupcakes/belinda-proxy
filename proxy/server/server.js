const express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/rooms/:id', express.static(path.join(__dirname, '/../public')));


app.listen(3000, () => console.log('App listening on port 3000...'));