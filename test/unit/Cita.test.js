const { Cita, ESTADOS } = require('../../src/domain/Cita');

function nuevaCita(estado) {
  const cita = new Cita({ clienteId: 'cliente-01', mascotaId: 'mascota-01', fecha: '2026-11-20', hora: '10:00' });
  cita.estado = estado;
  return cita;
}

describe('Cita.cancelar: lo que ya hace (vistas pasar antes de tocar la función)', () => {
  test('cancela una cita creada', () => {
    const cita = nuevaCita(ESTADOS.CREADA);
    cita.cancelar();
    expect(cita.estado).toBe(ESTADOS.CANCELADA);
  });

  test('cancela una cita confirmada', () => {
    const cita = nuevaCita(ESTADOS.CONFIRMADA);
    cita.cancelar();
    expect(cita.estado).toBe(ESTADOS.CANCELADA);
  });
});

describe('Cita.cancelar: solo antes de la atención (SAD v1.0, ciclo de vida)', () => {
  test('no cancela una cita en atención', () => {
    const cita = nuevaCita(ESTADOS.EN_PROCESO);
    expect(() => cita.cancelar()).toThrow('No se puede cancelar una cita en estado en_proceso');
  });
  test('no cancela una cita finalizada', () => {
    const cita = nuevaCita(ESTADOS.FINALIZADA);
    expect(() => cita.cancelar()).toThrow('No se puede cancelar una cita en estado finalizada');
  });
  test('no cancela una cita ya cancelada', () => {
    const cita = nuevaCita(ESTADOS.CANCELADA);
    expect(() => cita.cancelar()).toThrow('No se puede cancelar una cita en estado cancelada');
  });
});