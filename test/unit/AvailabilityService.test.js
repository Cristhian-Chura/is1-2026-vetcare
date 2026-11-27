const { AvailabilityService } = require('../../src/services/AvailabilityService');

const FECHA = '2026-11-20';

describe('horarioDisponible: lo que ya hace (vistas pasar antes de tocar la función)', () => {
  const servicio = new AvailabilityService({ apertura: 8, cierre: 18 });

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
  const servicio = new AvailabilityService({ apertura: 8, cierre: 18 });
  const FORMATO_INVALIDO = { codigo: 'FORMATO_INVALIDO', status: 400 };

  test('rechaza una hora sin minutos con FORMATO_INVALIDO y la hora recibida', async () => {
    await expect(servicio.horarioDisponible(FECHA, '10')).rejects.toMatchObject({
      ...FORMATO_INVALIDO,
      message: 'Hora inválida "10": se espera HH:MM entre 00:00 y 23:59',
    });
  });

  test('rechaza minutos fuera de rango', async () => {
    await expect(servicio.horarioDisponible(FECHA, '10:60')).rejects.toMatchObject(FORMATO_INVALIDO);
  });

  test('rechaza una fecha que no existe en el calendario con la fecha recibida', async () => {
    await expect(servicio.horarioDisponible('2026-02-30', '10:00')).rejects.toMatchObject({
      ...FORMATO_INVALIDO,
      message: 'Fecha inválida "2026-02-30": se espera AAAA-MM-DD de un día que exista',
    });
  });

  test('rechaza una fecha sin la forma AAAA-MM-DD', async () => {
    await expect(servicio.horarioDisponible('20-11-2026', '10:00')).rejects.toMatchObject(FORMATO_INVALIDO);
  });

  test('rechaza una fecha con un mes que no existe', async () => {
    await expect(servicio.horarioDisponible('2026-13-01', '10:00')).rejects.toMatchObject(FORMATO_INVALIDO);
  });
});

describe('horarioDisponible: horario desde la configuración (factor III)', () => {
  test('usa la hora de cierre que recibe', async () => {
    const servicio = new AvailabilityService({ apertura: 8, cierre: 20 });
    expect(await servicio.horarioDisponible(FECHA, '19:00')).toBe(true);
  });
});
