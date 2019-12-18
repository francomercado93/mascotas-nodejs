Mascota = require('../models/mascotaModel');

// get de mascotas
exports.index = function (req, res) {
    Mascota.get(function (err, mascotas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "mascotas retrieved successfully",
            data: mascotas
        });
    });
};

// Handle create mascota actions
exports.new = function (req, res) {
    var mascota = new Mascota();
    mascota.nombre = req.body.nombre ? req.body.nombre : mascota.nombre;
    mascota.tipo = req.body.tipo;
    mascota.edad = req.body.edad;
    mascota.descripcion = req.body.descripcion;
    mascota.imagen = req.body.imagen;
    mascota.save(function (err) {
        if (err)
            res.json(err); res.json({
                message: 'Nueva mascota creada!',
                data: mascota
            });
    });
};

// Handle view mascota info
exports.view = function (req, res) {
    mascota.findById(req.params.mascota_id, function (err, mascota) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalles de mascota',
            data: mascota
        });
    });
};// Handle update mascota info
exports.update = function (req, res) {
    Mascota.findById(req.params.mascota_id, function (err, mascota) {
        if (err)
            res.send(err);

        mascota.nombre = req.body.nombre ? req.body.nombre : mascota.nombre;
        mascota.tipo = req.body.tipo;
        mascota.edad = req.body.edad;
        mascota.descripcion = req.body.descripcion;
        mascota.imagen = req.body.imagen;

        mascota.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Mascota actualizada!',
                data: mascota
            });
        });
    });
};// Handle delete mascota
exports.delete = function (req, res) {
    Mascota.remove({
        _id: req.params.mascota_id
    }, function (err, mascota) {
        if (err)
            res.send(err); res.json({
                status: "success",
                message: 'mascota eliminada de la base de datos'
            });
    });
};
