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

  test('lanza un error que nombra las variables que faltan', () => {
    expect(() => leerConfiguracion({ PORT: '3000' })).toThrow(
      'Faltan variables de entorno: DATABASE_URL, HORA_APERTURA, HORA_CIERRE',
    );
  });

  test('lanza un error si una hora del horario no es un número entero', () => {
    expect(() => leerConfiguracion({ ...ENTORNO_COMPLETO, HORA_CIERRE: 'seis' })).toThrow(
      'HORA_CIERRE debe ser un número entero de 0 a 24',
    );
  });

});