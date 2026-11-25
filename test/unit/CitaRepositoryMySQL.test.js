const { CitaRepositoryMySQL } = require('../../src/repositories/CitaRepositoryMySQL');
const { Cita } = require('../../src/domain/Cita');

const FILA = {
  cita_id: 'cita-abc',
  cliente_id: 'cliente-01',
  mascota_id: 'mascota-01',
  fecha: '2026-11-20',
  hora: '10:00',
  motivo: null,
  prioridad: 'normal',
  estado: 'confirmada',
};

function poolFalso(filas = []) {
  return { execute: jest.fn().mockResolvedValue([filas]) };
}

function citaNueva() {
  return new Cita({ clienteId: 'cliente-01', mascotaId: 'mascota-01', fecha: '2026-11-20', hora: '10:00' });
}

describe('CitaRepositoryMySQL (factores VI y IV)', () => {
  test('guardar asigna un id único y escribe la cita en la base', async () => {
    const pool = poolFalso();
    const cita = citaNueva();

    await new CitaRepositoryMySQL(pool).guardar(cita);

    const [sql, valores] = pool.execute.mock.calls[0];
    expect(cita.citaId).toMatch(/^cita-[0-9a-f-]{36}$/);
    expect(sql).toContain('INSERT INTO citas');
    expect(valores).toEqual([cita.citaId, 'cliente-01', 'mascota-01', '2026-11-20', '10:00', null, 'normal', 'creada']);
  });
  test('guardar conserva el id de una cita existente y actualiza su estado', async () => {
    const pool = poolFalso();
    const cita = citaNueva();
    cita.citaId = 'cita-abc';

    await new CitaRepositoryMySQL(pool).guardar(cita);

    expect(cita.citaId).toBe('cita-abc');
    expect(pool.execute.mock.calls[0][0]).toContain('ON DUPLICATE KEY UPDATE');
  });
  test('buscarPorId reconstruye la cita con el estado guardado', async () => {
    const cita = await new CitaRepositoryMySQL(poolFalso([FILA])).buscarPorId('cita-abc');

    expect(cita.toResponse()).toEqual({
      citaId: 'cita-abc',
      clienteId: 'cliente-01',
      mascotaId: 'mascota-01',
      fecha: '2026-11-20',
      hora: '10:00',
      motivo: null,
      prioridad: 'normal',
      estado: 'confirmada',
    });
  });
  test('buscarPorId devuelve null si la cita no existe', async () => {
    expect(await new CitaRepositoryMySQL(poolFalso([])).buscarPorId('cita-x')).toBeNull();
  });
});