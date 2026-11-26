const { AvailabilityService } = require('../../src/services/AvailabilityService');

const FECHA = '2026-11-20';

describe('horarioDisponible: lo que ya hace (vistas pasar antes de tocar la función)', () => {
  const servicio = new AvailabilityService({ apertura: 8, cierre: 18 })

  test('acepta la hora de apertura, 08:00', async () => {
    expect(await servicio.horarioDisponible(FECHA, '08:00')).toBe(true);
  });

  test('rechaza el minuto anterior a la apertura, 07:59', async () => {
    expect(await servicio.horarioDisponible(FECHA, '07:59')).toBe(false);
  });

  test('acepta el último minuto antes del cierre, 17:59', async () => {
    expect(await servicio.horarioDisponible(FECHA, '17:59')).toBe(true);
  });

  test('rechaza la hora de cierre, 18:00', async () => {
    expect(await servicio.horarioDisponible(FECHA, '18:00')).toBe(false);
  });
});

describe('horarioDisponible: valida el formato de hora y fecha (#55, #57)', () => {
  const servicio = new AvailabilityService({ apertura: 8, cierre: 18 })
  test('rechaza una hora sin minutos', async () => {
    expect(await servicio.horarioDisponible(FECHA, '10')).toBe(false);
  });

  test('rechaza minutos fuera de rango', async () => {
    expect(await servicio.horarioDisponible(FECHA, '10:60')).toBe(false);
  });

  test('rechaza una fecha que no existe en el calendario', async () => {
    expect(await servicio.horarioDisponible('2026-02-30', '10:00')).toBe(false);
  });

  test('rechaza una fecha sin la forma AAAA-MM-DD', async () => {
    expect(await servicio.horarioDisponible('20-11-2026', '10:00')).toBe(false);
  });

  test('rechaza una fecha con un mes que no existe', async () => {
    expect(await servicio.horarioDisponible('2026-13-01', '10:00')).toBe(false);
  });
});

describe('horarioDisponible: horario desde la configuración (factor III)', () => {
  test('usa la hora de cierre que recibe', async () => {
    const servicio = new AvailabilityService({ apertura: 8, cierre: 20 });
    expect(await servicio.horarioDisponible(FECHA, '19:00')).toBe(true);
  });
});
