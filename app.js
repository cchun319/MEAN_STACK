const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

const users = require('./routes/users');

app.get('/', (req, res) =>{
	res.send("Invalid endpoint");
});

// Body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

// Cors Middleware
app.use(cors());

app.listen(port, () =>{ 
	console.log('server started on port' + port);
	});