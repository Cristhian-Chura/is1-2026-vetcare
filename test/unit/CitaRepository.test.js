const { CitaRepositoryEnMemoria } = require('../../src/repositories/CitaRepository');

describe('CitaRepositoryEnMemoria.listar', () => {
  test('prueba de arranque: un repositorio vacío lista cero citas', async () => {
    const repositorio = new CitaRepositoryEnMemoria();
    expect(await repositorio.listar()).toEqual([]);
  });
  test('lista las citas guardadas en el orden en que se guardaron', async () => {
    const repositorio = new CitaRepositoryEnMemoria();
    const primera = await repositorio.guardar({ motivo: 'Vacunación' });
    const segunda = await repositorio.guardar({ motivo: 'Control anual' });
    expect(await repositorio.listar()).toEqual([primera, segunda]);
  });
});
