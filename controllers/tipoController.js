var mongoose = require('mongoose');

var Tipo = mongoose.model('Tipo');

exports.findAllTipos = function (req, res) {
    Tipo.find(function (err, tipos) {
        if (err)
            res.send(500, err.message);
        console.log('GET/tipos')
        res.status(200).jsonp(tipos);
    });
};
