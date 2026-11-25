// Dominio puro: no conoce MySQL, Express, ni ningún detalle de infraestructura.
// Estados según la máquina de estados del SAD v1.0, Sección "Ciclo de vida".
const ESTADOS = Object.freeze({
  CREADA: 'creada',
  CONFIRMADA: 'confirmada',
  EN_PROCESO: 'en_proceso',
  FINALIZADA: 'finalizada',
  CANCELADA: 'cancelada',
});

// Una cita solo se cancela en una etapa previa a la atención (SAD v1.0, ciclo de vida).
const ESTADOS_CANCELABLES = [ESTADOS.CREADA, ESTADOS.CONFIRMADA];

// Transición que el ciclo de vida no permite. Es la única que la fachada traduce al contrato;
// cualquier otro error es un fallo inesperado y sigue su camino.
class TransicionInvalidaError extends Error {}

class Cita {
  constructor({ citaId, clienteId, mascotaId, fecha, hora, motivo, prioridad }) {
    this.citaId = citaId;
    this.clienteId = clienteId;
    this.mascotaId = mascotaId;
    this.fecha = fecha;
    this.hora = hora;
    this.motivo = motivo || null;
    this.prioridad = prioridad || 'normal';
    // Toda Cita nace en estado CREADA (evento POST /citas validado por el contrato)
    this.estado = ESTADOS.CREADA;
  }

  confirmar() {
    // Guarda 1 del SAD: solo avanza si la disponibilidad fue evaluada como verdadera.
    // Esa evaluación vive en AvailabilityService, no aquí: el dominio solo aplica la transición.
    // Solo una cita CREADA puede confirmarse (ciclo de vida del SAD v1.0).
    if (this.estado !== ESTADOS.CREADA) {
      throw new TransicionInvalidaError(`No se puede confirmar una cita en estado ${this.estado}`);
    }
    this.estado = ESTADOS.CONFIRMADA;
  }

  cancelar() {
    if (!ESTADOS_CANCELABLES.includes(this.estado)) {
      throw new TransicionInvalidaError(`No se puede cancelar una cita en estado ${this.estado}`);
    }
    this.estado = ESTADOS.CANCELADA;
  }

  toResponse() {
    return {
      citaId: this.citaId,
      clienteId: this.clienteId,
      mascotaId: this.mascotaId,
      fecha: this.fecha,
      hora: this.hora,
      motivo: this.motivo,
      prioridad: this.prioridad,
      estado: this.estado,
    };
  }
}

module.exports = { Cita, ESTADOS, TransicionInvalidaError };
