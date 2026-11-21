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
  test('pide a la fachada cancelar la cita del parámetro de la ruta', async () => {
    const citaFacade = { cancelarCita: jest.fn().mockResolvedValue({ citaId: 'cita-7', estado: 'cancelada' }) };
    const res = respuestaFalsa();

    await cancelarCitaHandler(citaFacade)({ params: { citaId: 'cita-7' } }, res);

    expect(citaFacade.cancelarCita).toHaveBeenCalledWith('cita-7');
    expect(res.json).toHaveBeenCalledWith({ citaId: 'cita-7', estado: 'cancelada' });
  });
  test('responde 404 con el esquema Error si la cita no existe', async () => {
    const error = Object.assign(new Error('No existe una cita con id cita-99'), {
      codigo: 'CITA_NO_ENCONTRADA',
      status: 404,
    });
    const citaFacade = { cancelarCita: jest.fn().mockRejectedValue(error) };
    const res = respuestaFalsa();

    await cancelarCitaHandler(citaFacade)({ params: { citaId: 'cita-99' } }, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      codigo: 'CITA_NO_ENCONTRADA',
      mensaje: 'No existe una cita con id cita-99',
    });
  });
});
