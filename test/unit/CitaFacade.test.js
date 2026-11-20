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

  test('cancela la cita y la guarda sin borrarla (eliminación lógica, ADR-003)', async () => {
    const cita = { citaId: 'cita-1', cancelar: jest.fn() };
    const { citaFacade, citaRepository } = crearFachada(cita);

    const resultado = await citaFacade.cancelarCita('cita-1');

    expect(cita.cancelar).toHaveBeenCalled();
    expect(citaRepository.guardar).toHaveBeenCalledWith(cita);
    expect(citaRepository.eliminar).not.toHaveBeenCalled();
    expect(resultado).toBe(cita);
  });

  test('traduce el rechazo del dominio a CITA_NO_CANCELABLE con 400 y no guarda', async () => {
    const cita = {
      citaId: 'cita-2',
      cancelar: jest.fn(() => {
        throw new Error('No se puede cancelar una cita en estado finalizada');
      }),
    };
    const { citaFacade, citaRepository } = crearFachada(cita);

    await expect(citaFacade.cancelarCita('cita-2')).rejects.toMatchObject({
      codigo: 'CITA_NO_CANCELABLE',
      status: 400,
    });
    expect(citaRepository.guardar).not.toHaveBeenCalled();
  });
});
