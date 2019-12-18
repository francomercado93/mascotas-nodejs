let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import contact controller
var contactController = require('../controllers/contactController');// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new); router.route('/contacts/:contact_id')
        .get(contactController.view)
        .patch(contactController.update)
        .put(contactController.update)
        .delete(contactController.delete);// Export API routes


var mascotaController = require('../controllers/mascotaController');
router.route('/mascotas')
    .get(mascotaController.index)
    .post(mascotaController.new); router.route('/mascotas/:mascota_id')
        .get(mascotaController.view)
        .patch(mascotaController.update)
        .put(mascotaController.update)
        .delete(mascotaController.delete);

var tipoController = require('../controllers/tipoController');
router.route('/tipos')
    .get(tipoController.index)

module.exports = router;