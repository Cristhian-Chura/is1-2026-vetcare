// Verifica disponibilidad de horario. En esta rebanada usamos una regla simple
// y explícita (no hay agenda real de veterinarios todavía); dejar así documentado
// es preferible a simular una validación falsa como si fuera completa.
const HORA_APERTURA = 8;
const HORA_CIERRE = 18;

class AvailabilityService {
  async horarioDisponible(fecha, hora) {
    const [horaSolicitada] = hora.split(':').map(Number);
    return horaSolicitada >= HORA_APERTURA && horaSolicitada < HORA_CIERRE;
  }
}

module.exports = { AvailabilityService };
