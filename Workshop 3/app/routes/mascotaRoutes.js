const express = require('express');
const MascotaCtrl = require('../controllers/MascotaController');

const Router = express.Router();

Router.get('/', MascotaCtrl.index) //api.com/mascota/ Listar Todas las mascotas
       .post('/',MascotaCtrl.create)  //api.com/mascota/ Create: Crear un nuevo registro mascota
       .get('/:key/:value',MascotaCtrl.find,MascotaCtrl.show)   //api.com/mascota/geolocalizacion/  show: muestra una busquedad en especifico
       .put('/:key/:value',MascotaCtrl.find,MascotaCtrl.update)   //api.com/mascota/microchip Update: Actuliar a una mascota en especifico 
       .delete('/:key/:value',MascotaCtrl.find,MascotaCtrl.remove);


module.exports = Router;