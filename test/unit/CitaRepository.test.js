const { CitaRepositoryEnMemoria } = require('../../src/repositories/CitaRepository');

describe('CitaRepositoryEnMemoria.listar', () => {
  test('prueba de arranque: un repositorio vacío lista cero citas', async () => {
    const repositorio = new CitaRepositoryEnMemoria();
    expect(await repositorio.listar()).toEqual([]);
  });
});