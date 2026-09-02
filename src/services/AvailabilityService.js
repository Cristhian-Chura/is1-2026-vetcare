// Verifica disponibilidad de horario. En esta rebanada usamos una regla simple
// y explícita (no hay agenda real de veterinarios todavía); dejar así documentado
// es preferible a simular una validación falsa como si fuera completa.
class AvailabilityService {
  async horarioDisponible(fecha, hora) {
    // Regla provisional: cualquier hora entre 08:00 y 18:00 se considera disponible.
    const [horaNum] = hora.split(':').map(Number);
    return horaNum >= 8 && horaNum < 18;
  }
}

module.exports = { AvailabilityService };
