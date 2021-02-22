const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Middleware
app.use(bodyParser.json());

// Environment Variables
require('dotenv/config');
const port = process.env.PORT;
const api = process.env.API_URL;
const connection_string = process.env.CONNECTION_STRING;

const cors = require('cors');
app.use(cors());
app.options('*', cors());

// Router imports
const studentsRouter = require('./routes/students');
app.use(`${api}/students`, studentsRouter); //register the routes

mongoose.connect(
    connection_string, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('Database connected'))


app.listen(port, () => {
    console.log('App is listening on ' + port);
    console.log(api);
})