// Dominio puro: no conoce MySQL, Express, ni ningún detalle de infraestructura.
// Estados según la máquina de estados del SAD v1.0, Sección "Ciclo de vida".
const ESTADOS = Object.freeze({
  CREADA: 'creada',
  CONFIRMADA: 'confirmada',
  EN_PROCESO: 'en_proceso',
  FINALIZADA: 'finalizada',
  CANCELADA: 'cancelada',
});

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
    this.estado = ESTADOS.CONFIRMADA;
  }

  cancelar() {
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

module.exports = { Cita, ESTADOS };
