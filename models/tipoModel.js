var mongoose = require('mongoose');

// Setup schema
var tipoSchema = mongoose.Schema({
    nombre: String,
});
// Export Contact model
var Tipo = module.exports = mongoose.model('tipo', tipoSchema);

module.exports.get = function (callback, limit) {
    Tipo.find(callback).limit(limit);
}