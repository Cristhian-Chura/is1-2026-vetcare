const mysql = require('mysql2/promise');
const { crearApp } = require('./app');
const { leerConfiguracion } = require('./config');
const { CitaRepositoryMySQL } = require('./repositories/CitaRepositoryMySQL');
const { logger } = require('./shared/logger');

const config = leerConfiguracion(process.env);
const pool = mysql.createPool(config.databaseUrl);
const app = crearApp({ horario: config.horario, citaRepository: new CitaRepositoryMySQL(pool) });

app.listen(config.puerto, () => {
  logger.info({ operacion: 'servidor.iniciar', resultado: 'escuchando', puerto: config.puerto });
});