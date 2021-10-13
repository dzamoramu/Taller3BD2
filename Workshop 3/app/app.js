const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Mascotas = require('./routes/mascotaRoutes');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/mascota',Mascotas);

module.exports = App;