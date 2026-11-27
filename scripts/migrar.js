// Factor XII: proceso de administración puntual. Crea la tabla citas si no existe y termina.
// Se ejecuta con la misma imagen y la misma configuración: node scripts/migrar.js
const mysql = require('mysql2/promise');
const { logger } = require('../src/shared/logger');

const SQL_CREAR_TABLA = `CREATE TABLE IF NOT EXISTS citas (
  cita_id VARCHAR(64) PRIMARY KEY,
  cliente_id VARCHAR(64) NOT NULL,
  mascota_id VARCHAR(64) NOT NULL,
  fecha CHAR(10) NOT NULL,
  hora CHAR(5) NOT NULL,
  motivo VARCHAR(255) NULL,
  prioridad VARCHAR(20) NOT NULL,
  estado VARCHAR(20) NOT NULL,
  creada_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
)`;

async function migrar() {
  if (!process.env.DATABASE_URL) {
    throw new Error('Falta la variable de entorno DATABASE_URL (revise .env.example)');
  }
  const conexion = await mysql.createConnection(process.env.DATABASE_URL);
  try {
    await conexion.query(SQL_CREAR_TABLA);
  } finally {
    await conexion.end();
  }
}

migrar()
  .then(() => logger.info({ operacion: 'migrar', resultado: 'tabla citas lista' }))
  .catch((error) => {
    logger.error({ operacion: 'migrar', resultado: error.message });
    process.exitCode = 1;
  });