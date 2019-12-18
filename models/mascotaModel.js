var mongoose = require('mongoose');

// Setup schema

var TipoSchema = require('./tipoModel');

var mascotaSchema = mongoose.Schema({
    nombre: String,
    tipo: String,
    edad: Number,
    descripcion: String,
    imagen: String
});
// Export Contact model
var Mascota = module.exports = mongoose.model('mascota', mascotaSchema);

module.exports.get = function (callback, limit) {
    Mascota.find(callback).limit(limit);
}