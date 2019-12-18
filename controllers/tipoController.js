Tipo = require('../models/tipoModel');

// get de mascotas
exports.index = function (req, res) {
    Tipo.get(function (err, tipos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "tipos retrieved successfully",
            data: tipos
        });
    });
};
