exports = module.exports = function (app, mongoose) {

    var tipoSchema = new mongoose.Schema({
        nombre: String,
    });
    mongoose.model('Tipo', tipoSchema);
};
