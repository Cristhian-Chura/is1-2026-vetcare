const express = require('express');
const { citasRouter } = require('./routes/citas');
const { CitaFacade } = require('./services/CitaFacade');
const { AvailabilityService } = require('./services/AvailabilityService');
const { PetService } = require('./services/PetService');
const { CitaRepositoryEnMemoria } = require('./repositories/CitaRepository');

function crearApp() {
  const app = express();
  app.use(express.json());

  // Composición de dependencias (aquí es el único lugar que "conoce" todas las capas)
  const citaFacade = new CitaFacade({
    availabilityService: new AvailabilityService(),
    petService: new PetService(),
    citaRepository: new CitaRepositoryEnMemoria(),
  });

  app.use('/api/v1/citas', citasRouter(citaFacade));

  return app;
}

module.exports = { crearApp };
