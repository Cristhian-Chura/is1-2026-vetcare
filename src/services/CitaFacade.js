const { Cita } = require('../domain/Cita');

// ADR-002: CitaFacade es el único intermediario entre el controlador y los
// subsistemas internos (disponibilidad, mascotas, persistencia). El controlador
// nunca llama a AvailabilityService o al repositorio directamente.
class CitaFacade {
  constructor({ availabilityService, petService, citaRepository }) {
    this.availabilityService = availabilityService;
    this.petService = petService;
    this.citaRepository = citaRepository;
  }

  /**
   * Crea y persiste una cita después de validar mascota y disponibilidad.
   */
  async crearCita({ clienteId, mascotaId, fecha, hora, motivo, prioridad }) {
    const mascotaValida = await this.petService.mascotaValida(mascotaId);
    if (!mascotaValida) {
      const error = new Error('mascotaId inválido o no encontrado');
      error.codigo = 'MASCOTA_INVALIDA';
      error.status = 400;
      throw error;
    }

    const disponible = await this.availabilityService.horarioDisponible(fecha, hora);
    if (!disponible) {
      const error = new Error('Horario no disponible');
      error.codigo = 'HORARIO_NO_DISPONIBLE';
      error.status = 400;
      throw error;
    }

    const cita = new Cita({ clienteId, mascotaId, fecha, hora, motivo, prioridad });
    cita.confirmar();
    await this.citaRepository.guardar(cita);
    return cita;
  }

  /**
   * Recupera una cita por ID y reporta 404 cuando no existe.
   */
  async obtenerCita(citaId) {
    const cita = await this.citaRepository.buscarPorId(citaId);

    if (!cita) {
      const error = new Error(`No existe una cita con id ${citaId}`);
      error.codigo = 'CITA_NO_ENCONTRADA';
      error.status = 404;
      throw error;
    }

    return cita;
  }
}

module.exports = { CitaFacade };
