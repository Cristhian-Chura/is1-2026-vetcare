const { CitaFacade } = require('../../src/services/CitaFacade');

function crearFachada(citaGuardada) {
  const citaRepository = {
    buscarPorId: jest.fn().mockResolvedValue(citaGuardada),
    guardar: jest.fn().mockResolvedValue(citaGuardada),
    eliminar: jest.fn(),
  };
  const citaFacade = new CitaFacade({ availabilityService: {}, petService: {}, citaRepository });
  return { citaFacade, citaRepository };
}

describe('CitaFacade.cancelarCita', () => {
  test('rechaza con CITA_NO_ENCONTRADA y 404 si la cita no existe', async () => {
    const { citaFacade } = crearFachada(null);
    await expect(citaFacade.cancelarCita('cita-99')).rejects.toMatchObject({
      codigo: 'CITA_NO_ENCONTRADA',
      status: 404,
    });
  });
});