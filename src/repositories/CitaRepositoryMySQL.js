// Factores VI y IV: las citas viven en MySQL, un servicio de respaldo conectado por DATABASE_URL.
// El proceso no guarda nada entre peticiones; el id es un UUID, sin contador en memoria.
const { randomUUID } = require('node:crypto');
const { Cita } = require('../domain/Cita');

const COLUMNAS = 'cita_id, cliente_id, mascota_id, fecha, hora, motivo, prioridad, estado';
const SQL_GUARDAR = `INSERT INTO citas (${COLUMNAS}) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

function aValores(cita) {
  return [cita.citaId, cita.clienteId, cita.mascotaId, cita.fecha, cita.hora, cita.motivo, cita.prioridad, cita.estado];
}

class CitaRepositoryMySQL {
  constructor(pool) {
    this.pool = pool;
  }

  async guardar(cita) {
    cita.citaId = `cita-${randomUUID()}`;
    await this.pool.execute(SQL_GUARDAR, aValores(cita));
    return cita;
  }
}

module.exports = { CitaRepositoryMySQL };