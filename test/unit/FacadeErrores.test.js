const { CitaFacade } = require('../../src/services/CitaFacade');

function crearFachada(citaGuardada) {
  const citaRepository = {
    buscarPorId: jest.fn().mockResolvedValue(citaGuardada),
    guardar: jest.fn().mockResolvedValue(citaGuardada),
  };
  const citaFacade = new CitaFacade({ availabilityService: {}, petService: {}, citaRepository });
  return { citaFacade, citaRepository };
}

describe('CitaFacade.cancelarCita: fallos inesperados (error escondido)', () => {
  test('no disfraza un fallo inesperado como CITA_NO_CANCELABLE', async () => {
    const cita = {
      citaId: 'cita-1',
      cancelar: jest.fn().mockImplementation(() => {
        throw new TypeError('estado ilegible');
      }),
    };
    const { citaFacade, citaRepository } = crearFachada(cita);

    await expect(citaFacade.cancelarCita('cita-1')).rejects.toThrow(TypeError);
    expect(citaRepository.guardar).not.toHaveBeenCalled();
  });
});