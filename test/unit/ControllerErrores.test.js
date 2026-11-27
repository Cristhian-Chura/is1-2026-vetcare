const { crearCitaHandler } = require('../../src/controllers/CitaController');
const { logger } = require('../../src/shared/logger');

const CITA_VALIDA = { clienteId: 'cliente-01', mascotaId: 'mascota-01', fecha: '2026-11-20', hora: '10:00' };

function respuestaFalsa() {
  return { status: jest.fn().mockReturnThis(), json: jest.fn() };
}

function fachadaQueFalla() {
  return { crearCita: jest.fn().mockRejectedValue(new Error('connect ECONNREFUSED 127.0.0.1:3306')) };
}

describe('responderError: fallos inesperados (error escondido)', () => {
  afterEach(() => jest.restoreAllMocks());

  test('responde 500 sin exponer el mensaje interno si la fachada falla sin código', async () => {
    jest.spyOn(logger, 'error').mockImplementation(() => {});
    const res = respuestaFalsa();

    await crearCitaHandler(fachadaQueFalla())({ body: CITA_VALIDA }, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ codigo: 'ERROR_INTERNO', mensaje: 'Error interno del servidor' });
  });
});