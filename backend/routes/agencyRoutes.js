// agencyRoutes.js
const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agencyController');

// Routes for agency CRUD operations
router.post('/', agencyController.addAgency);
router.get('/', agencyController.getAllAgencies);
router.get('/:id', agencyController.getAgencyById);
router.put('/:id', agencyController.updateAgency);
router.delete('/:id', agencyController.deleteAgency);
router.get('/checkAID/:aid', agencyController.checkAgencyByAID);

module.exports = router;
