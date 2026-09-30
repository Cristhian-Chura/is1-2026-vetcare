const express = require('express');
const { crearCitaHandler } = require('../controllers/CitaController');

function citasRouter(citaFacade) {
  const router = express.Router();
  router.post('/', crearCitaHandler(citaFacade));
  return router;
}

module.exports = { citasRouter };
