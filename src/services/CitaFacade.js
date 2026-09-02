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
    cita.confirmar(); // Guarda 1: horarioDisponible == true → CitaConfirmada
    await this.citaRepository.guardar(cita);
    return cita;
  }
}

module.exports = { CitaFacade };
