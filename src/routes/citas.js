const express = require('express');
const { crearCitaHandler, obtenerCitaHandler, cancelarCitaHandler } = require('../controllers/CitaController');

function citasRouter(citaFacade) {
  const router = express.Router();

  router.post('/', crearCitaHandler(citaFacade));
  router.get('/:citaId', obtenerCitaHandler(citaFacade));
  router.delete('/:citaId', cancelarCitaHandler(citaFacade));

  return router;
}

module.exports = { citasRouter };
