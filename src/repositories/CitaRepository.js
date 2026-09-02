// ADR-003: el dominio depende de una interfaz (RepositorioCita), nunca al revés.
// Esta es la implementación concreta para la rebanada vertical: almacenamiento en
// memoria, tal como permite la FAQ de la guía de laboratorio mientras la BD real
// (MySQL/Google Cloud SQL) no está configurada. Cambiar a MySQL más adelante no
// debería tocar CitaFacade ni CitaService: solo esta clase.
class CitaRepositoryEnMemoria {
  constructor() {
    this._citas = new Map();
    this._contador = 0;
  }

  async guardar(cita) {
    if (!cita.citaId) {
      this._contador += 1;
      cita.citaId = `cita-${this._contador}`;
    }
    this._citas.set(cita.citaId, cita);
    return cita;
  }

  async buscarPorId(citaId) {
    return this._citas.get(citaId) || null;
  }

  async eliminar(citaId) {
    // Eliminación lógica, no física (ver ADR-003): se delega el cambio de estado
    // a la capa de servicio; el repositorio solo persiste lo que recibe.
    return this._citas.delete(citaId);
  }
}

module.exports = { CitaRepositoryEnMemoria };
