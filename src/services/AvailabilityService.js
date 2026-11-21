// Verifica disponibilidad de horario. En esta rebanada usamos una regla simple
// y explícita (no hay agenda real de veterinarios todavía); dejar así documentado
// es preferible a simular una validación falsa como si fuera completa.
const HORA_APERTURA = 8;
const HORA_CIERRE = 18;
const FORMATO_HORA = /^([01]\d|2[0-3]):[0-5]\d$/;

const FORMATO_FECHA = /^\d{4}-\d{2}-\d{2}$/;

// Una fecha es válida si tiene la forma AAAA-MM-DD y existe en el calendario
// (Date convierte 2026-02-30 en 2026-03-02, por eso se compara de vuelta).
function fechaValida(fecha) {
  if (!FORMATO_FECHA.test(fecha)) {
    return false;
  }
  const dia = new Date(`${fecha}T00:00:00Z`);
  return !Number.isNaN(dia.getTime()) && dia.toISOString().startsWith(fecha);
}

class AvailabilityService {
  async horarioDisponible(fecha, hora) {
    if (!FORMATO_HORA.test(hora) || !fechaValida(fecha)) {
      return false;
    }
    const [horaSolicitada] = hora.split(':').map(Number);
    return horaSolicitada >= HORA_APERTURA && horaSolicitada < HORA_CIERRE;
  }
}

module.exports = { AvailabilityService };
