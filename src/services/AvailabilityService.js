// Verifica disponibilidad de horario. En esta rebanada usamos una regla simple
// y explícita (no hay agenda real de veterinarios todavía); dejar así documentado
// es preferible a simular una validación falsa como si fuera completa.
const { HTTP_SOLICITUD_INVALIDA } = require('../shared/httpStatus');
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

// Un formato inválido no es «horario no disponible»: se informa con su propio código y el valor recibido.
function errorDeFormato(mensaje) {
  const error = new Error(mensaje);
  error.codigo = 'FORMATO_INVALIDO';
  error.status = HTTP_SOLICITUD_INVALIDA;
  return error;
}
class AvailabilityService {
  constructor({ apertura, cierre }) {
    this.apertura = apertura;
    this.cierre = cierre;
  }
  async horarioDisponible(fecha, hora) {
    if (!FORMATO_HORA.test(hora)) {
      throw errorDeFormato(`Hora inválida "${hora}": se espera HH:MM entre 00:00 y 23:59`);
    }
    if (!fechaValida(fecha)) {
      throw errorDeFormato(`Fecha inválida "${fecha}": se espera AAAA-MM-DD de un día que exista`);
    }
    const [horaSolicitada] = hora.split(':').map(Number);
    return horaSolicitada >= this.apertura && horaSolicitada < this.cierre;
  }
}

module.exports = { AvailabilityService };
