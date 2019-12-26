exports = module.exports = function (app, mongoose) {

    var mascotaSchema = new mongoose.Schema({
        nombre: String,
        tipo: String,
        edad: Number,
        descripcion: String,
        imagen: String
    },
        { versionKey: false });

    mongoose.model('Mascota', mascotaSchema);
};