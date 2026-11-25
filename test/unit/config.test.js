const { leerConfiguracion } = require('../../src/config');

const ENTORNO_COMPLETO = {
  PORT: '3000',
  DATABASE_URL: 'mysql://usuario:cambia-esto@localhost:3306/vetcare',
  HORA_APERTURA: '8',
  HORA_CIERRE: '18',
};

describe('leerConfiguracion (factor III)', () => {
  test('lee el puerto, la base de datos y el horario del entorno', () => {
    expect(leerConfiguracion(ENTORNO_COMPLETO)).toEqual({
      puerto: 3000,
      databaseUrl: 'mysql://usuario:cambia-esto@localhost:3306/vetcare',
      horario: { apertura: 8, cierre: 18 },
    });
  });
});