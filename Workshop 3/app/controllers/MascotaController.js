const Mascota = require('../models/mascota');

function index(req,res){
    Mascota.find({})
        .then(mascotas => {
            if(mascotas.length) return res.status(200).send({mascotas});
            return res.status(204).send({message: 'NO CONTENT'});
            }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.mascotas) return res.status(404).send({message: 'NOT FOUND'});
    let mascotas = req.body.mascotas;
    return res.status(200).send({mascotas});
}

function create(req,res){
    let mascota = new Mascota(req.body);
    mascota.save().then(mascota => res.status(201).send({mascota})).catch(error => res.status(500).send({error}));

}

function update(req,res){
    if(req.body.error) return res.status(500).send({errror});
    if(!req.body.mascotas) return res.status(404).send({message: 'NOT FOUND'});
    let mascota = req.body.mascotas[0];
    mascota = Object.assign(mascota,req.body);
    mascota.save().then(mascota => res.status(200).send({message: 'UPDATED EXISTOSO',mascota})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.mascotas) return res.status(404).send({message: 'NOT FOUND'});
     req.body.mascotas[0].remove().then(mascota => res.status(200).send({message: 'REMOVED'
    ,mascota})).catch(error => res.status(500).send({error}));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Mascota.find(query).then(mascotas => {
        if(!mascotas.length) return next();
        req.body.mascotas = mascotas;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}


module.exports ={
    index,
    show,
    create,
    update,
    remove,
    find
}