const { manejarJsonInvalido } = require('../../src/middleware/jsonInvalido');

function respuestaFalsa() {
  return { status: jest.fn().mockReturnThis(), json: jest.fn() };
}

describe('manejarJsonInvalido (error escondido)', () => {
  test('deja pasar cualquier otro error al siguiente manejador', () => {
    const error = new Error('otro fallo');
    const next = jest.fn();

    manejarJsonInvalido(error, {}, respuestaFalsa(), next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
