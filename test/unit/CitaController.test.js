const { cancelarCitaHandler } = require('../../src/controllers/CitaController');

function respuestaFalsa() {
  return { status: jest.fn().mockReturnThis(), json: jest.fn() };
}

describe('cancelarCitaHandler (DELETE /citas/{citaId})', () => {
  test('responde 200 con el id y el estado cancelada', async () => {
    const citaFacade = { cancelarCita: jest.fn().mockResolvedValue({ citaId: 'cita-1', estado: 'cancelada' }) };
    const res = respuestaFalsa();

    await cancelarCitaHandler(citaFacade)({ params: { citaId: 'cita-1' } }, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ citaId: 'cita-1', estado: 'cancelada' });
  });
});