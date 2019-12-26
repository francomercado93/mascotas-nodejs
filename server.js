var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');

var router = express.Router();


mongoose.connect('mongodb://localhost/mascotas', function (err, res) {
  if (err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(process.env.PORT || 3000, function () {
    console.log("Node server running on http://localhost:3000");
  });
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var tipoModel = require('./models/tipoModel')(app, mongoose);
var mascotaModel = require('./models/mascotaModel')(app, mongoose);
var MascotaController = require('./controllers/mascotaController');
var TIpoController = require('./controllers/tipoController');

// Example Route
var router = express.Router();
router.get('/', function (req, res) {
  res.send("Hello world!");
});

app.use(router);

var router = express.Router();

router.route('/tipos')
  .get(TIpoController.findAllTipos);

router.route('/mascotas')
  .get(MascotaController.findAllMascotas)
  .post(MascotaController.addMascota)
  .put(MascotaController.updateMascota)

router.route('/mascotas/:id')
  .get(MascotaController.findMascotaById)
  .delete(MascotaController.deleteMascota)

app.use('/api', router);