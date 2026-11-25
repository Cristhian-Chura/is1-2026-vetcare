// Factores VI y IV: las citas viven en MySQL, un servicio de respaldo conectado por DATABASE_URL.
// El proceso no guarda nada entre peticiones; el id es un UUID, sin contador en memoria.
const { randomUUID } = require('node:crypto');
const { Cita } = require('../domain/Cita');

const COLUMNAS = 'cita_id, cliente_id, mascota_id, fecha, hora, motivo, prioridad, estado';
// Inserta la cita nueva o, si ya existe, actualiza su estado (cancelar es una eliminación lógica, ADR-003).
const SQL_GUARDAR = `INSERT INTO citas (${COLUMNAS}) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  AS nueva ON DUPLICATE KEY UPDATE estado = nueva.estado`;

function aValores(cita) {
  return [cita.citaId, cita.clienteId, cita.mascotaId, cita.fecha, cita.hora, cita.motivo, cita.prioridad, cita.estado];
}

function aCita(fila) {
  const cita = new Cita({
    citaId: fila.cita_id,
    clienteId: fila.cliente_id,
    mascotaId: fila.mascota_id,
    fecha: fila.fecha,
    hora: fila.hora,
    motivo: fila.motivo,
    prioridad: fila.prioridad,
  });
  cita.estado = fila.estado;
  return cita;
}

class CitaRepositoryMySQL {
  constructor(pool) {
    this.pool = pool;
  }

  async guardar(cita) {
    if (!cita.citaId) {
      cita.citaId = `cita-${randomUUID()}`;
    }
    await this.pool.execute(SQL_GUARDAR, aValores(cita));
    return cita;
  }

  async buscarPorId(citaId) {
    const [filas] = await this.pool.execute(`SELECT ${COLUMNAS} FROM citas WHERE cita_id = ?`, [citaId]);
    // Devuelve null si no existe: es el contrato del repositorio y la fachada lo traduce a 404.
    return filas.length > 0 ? aCita(filas[0]) : null;
  }
}

module.exports = { CitaRepositoryMySQL };
