// ADR-003: el dominio depende de una interfaz (RepositorioCita), nunca al revés.
// Doble de prueba: guarda las citas en la memoria del proceso y solo lo usan las pruebas.
// En ejecución las citas viven en MySQL (CitaRepositoryMySQL, factor VI).
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
  // Devuelve todas las citas guardadas, en el orden en que se guardaron.
  async listar() {
    return [...this._citas.values()];
  }

  async eliminar(citaId) {
    // Eliminación lógica, no física (ver ADR-003): se delega el cambio de estado
    // a la capa de servicio; el repositorio solo persiste lo que recibe.
    return this._citas.delete(citaId);
  }
}

module.exports = { CitaRepositoryEnMemoria };
