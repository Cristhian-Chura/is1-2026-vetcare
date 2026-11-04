const { Cita } = require('../domain/Cita');

function crearErrorDeNegocio(mensaje, codigo, status) {
  const error = new Error(mensaje);
  error.codigo = codigo;
  error.status = status;
  return error;
}

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
      throw crearErrorDeNegocio('mascotaId inválido o no encontrado', 'MASCOTA_INVALIDA', 400);
    }

    const disponible = await this.availabilityService.horarioDisponible(fecha, hora);
    if (!disponible) {
      throw crearErrorDeNegocio('Horario no disponible', 'HORARIO_NO_DISPONIBLE', 400);
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
      throw crearErrorDeNegocio(`No existe una cita con id ${citaId}`, 'CITA_NO_ENCONTRADA', 404);
    }

    return cita;
  }
}

module.exports = { CitaFacade };
