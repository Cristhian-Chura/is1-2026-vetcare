const { crearApp } = require('./app');
const { leerConfiguracion } = require('./config');
const { CitaRepositoryEnMemoria } = require('./repositories/CitaRepository');
const { logger } = require('./shared/logger');

const config = leerConfiguracion(process.env);
const app = crearApp({ horario: config.horario, citaRepository: new CitaRepositoryEnMemoria() });

app.listen(config.puerto, () => {
  logger.info({ operacion: 'servidor.iniciar', resultado: 'escuchando', puerto: config.puerto });
});
