var mongoose = require('mongoose');

var Mascota = mongoose.model('Mascota')

exports.findAllMascotas = function (req, res) {
    Mascota.find(function (err, tipos) {
        if (err)
            res.send(500, err.message);
        console.log('GET/tipos')
        res.status(200).jsonp(tipos);
    });
};

//GET - Devuelve una mascota que tiene el id que le pasamos
exports.findMascotaById = function (req, res) {
    Mascota.findById(req.params.id, function (err, mascota) {
        if (err) return res.send(500, err.message);
        console.log('GET /mascotas/' + req.params.id);
        res.status(200).jsonp(mascota);
    });
};

//POST - Agregar una mascota a la bd
exports.addMascota = function (req, res) {
    console.log('POST');
    console.log(req.body);

    var mascota = new Mascota({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        edad: req.body.edad,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen

    });

    mascota.save(function (err, mascota) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(mascota);
    });
};

//PUT - Actualizar una mascota
exports.updateMascota = function (req, res) {
    Mascota.findById(req.body._id, function (err, mascota) {
        console.log('PUT')
        console.log(req.body)
        mascota.nombre = req.body.nombre;
        mascota.tipo = req.body.tipo;
        mascota.edad = req.body.edad;
        mascota.descripcion = req.body.descripcion;
        mascota.imagen = req.body.imagen;

        mascota.save(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(mascota);
        });
    });
};

//DELETE - Eliminar una mascota de la base de datos con un id
exports.deleteMascota = function (req, res) {
    Mascota.deleteOne({ _id: req.params.id }, (err) => {
        console.log(req.params)
        if (err) {
            return res.send(500, err.message);
        }
        res.status(200);
    }
    );
};
