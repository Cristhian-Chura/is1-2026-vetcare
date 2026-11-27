const { logger } = require('../../src/shared/logger');

describe('logger (factor XI)', () => {
  afterEach(() => jest.restoreAllMocks());

  test('escribe el evento como una línea JSON en la salida estándar', () => {
    const escribir = jest.spyOn(process.stdout, 'write').mockImplementation(() => true);

    logger.info({ operacion: 'servidor.iniciar', resultado: 'escuchando' });

    const linea = escribir.mock.calls[0][0];
    expect(linea.endsWith('\n')).toBe(true);
    expect(JSON.parse(linea)).toMatchObject({ nivel: 'info', operacion: 'servidor.iniciar', resultado: 'escuchando' });
  });
});