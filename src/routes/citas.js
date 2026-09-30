const express = require('express');
const {
  crearCitaHandler,
  obtenerCitaHandler,
} = require('../controllers/CitaController');

function citasRouter(citaFacade) {
  const router = express.Router();

  router.post('/', crearCitaHandler(citaFacade));
  router.get('/:citaId', obtenerCitaHandler(citaFacade));

  return router;
}

module.exports = { citasRouter };
