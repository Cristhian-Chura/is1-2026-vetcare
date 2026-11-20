// Verifica disponibilidad de horario. En esta rebanada usamos una regla simple
// y explícita (no hay agenda real de veterinarios todavía); dejar así documentado
// es preferible a simular una validación falsa como si fuera completa.
const HORA_APERTURA = 8;
const HORA_CIERRE = 18;
const FORMATO_HORA = /^([01]\d|2[0-3]):[0-5]\d$/;

class AvailabilityService {
  async horarioDisponible(fecha, hora) {
    if (!FORMATO_HORA.test(hora)) {
      return false;
    }
    const [horaSolicitada] = hora.split(':').map(Number);
    return horaSolicitada >= HORA_APERTURA && horaSolicitada < HORA_CIERRE;
  }
}

module.exports = { AvailabilityService };
