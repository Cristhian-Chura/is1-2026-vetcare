const request = require('supertest');
const { crearApp } = require('../src/app');
const { CitaRepositoryEnMemoria } = require('../src/repositories/CitaRepository');

// Las pruebas arman la aplicación con un horario fijo y el repositorio en memoria,
// sin leer el entorno ni conectarse a MySQL.
function crearAppDePrueba() {
  return crearApp({ horario: { apertura: 8, cierre: 18 }, citaRepository: new CitaRepositoryEnMemoria() });
}

describe('POST /api/v1/citas — rebanada vertical', () => {
  const app = crearAppDePrueba();

  test('crea una cita y responde 201 con el esquema CitaResponse', async () => {
    const respuesta = await request(app).post('/api/v1/citas').send({
      clienteId: 'cliente-01',
      mascotaId: 'mascota-01',
      fecha: '2026-09-10',
      hora: '10:00',
      motivo: 'Control anual',
    });

    expect(respuesta.status).toBe(201);
    expect(respuesta.body).toHaveProperty('citaId');
    expect(respuesta.body.estado).toBe('confirmada');
  });

  test('responde 400 si falta un campo obligatorio del contrato', async () => {
    const respuesta = await request(app).post('/api/v1/citas').send({ clienteId: 'cliente-01' });

    expect(respuesta.status).toBe(400);
    expect(respuesta.body).toHaveProperty('codigo');
  });

  test('responde 400 si el horario está fuera de la disponibilidad configurada', async () => {
    const respuesta = await request(app).post('/api/v1/citas').send({
      clienteId: 'cliente-01',
      mascotaId: 'mascota-01',
      fecha: '2026-09-10',
      hora: '22:00',
    });

    expect(respuesta.status).toBe(400);
    expect(respuesta.body.codigo).toBe('HORARIO_NO_DISPONIBLE');
  });
});

describe('GET /api/v1/citas/{citaId} — RF-003 / TST-05', () => {
  const app = crearAppDePrueba();

  test('responde 200 y CitaResponse cuando la cita existe', async () => {
    const creada = await request(app).post('/api/v1/citas').send({
      clienteId: 'cliente-02',
      mascotaId: 'mascota-02',
      fecha: '2026-09-11',
      hora: '11:00',
      motivo: 'Vacunación',
    });

    const respuesta = await request(app).get(`/api/v1/citas/${creada.body.citaId}`);

    expect(respuesta.status).toBe(200);
    expect(respuesta.body.citaId).toBe(creada.body.citaId);
    expect(respuesta.body.clienteId).toBe('cliente-02');
    expect(respuesta.body.mascotaId).toBe('mascota-02');
    expect(respuesta.body.estado).toBe('confirmada');
  });

  test('responde 404 con esquema Error cuando la cita no existe', async () => {
    const respuesta = await request(app).get('/api/v1/citas/cita-inexistente');

    expect(respuesta.status).toBe(404);
    expect(respuesta.body).toEqual({
      codigo: 'CITA_NO_ENCONTRADA',
      mensaje: 'No existe una cita con id cita-inexistente',
    });
  });
});

describe('DELETE /api/v1/citas/{citaId} — cancelarCita', () => {
  const app = crearAppDePrueba();

  test('responde 200 y deja la cita en estado cancelada', async () => {
    const creada = await request(app).post('/api/v1/citas').send({
      clienteId: 'cliente-03',
      mascotaId: 'mascota-03',
      fecha: '2026-09-12',
      hora: '09:00',
    });

    const respuesta = await request(app).delete(`/api/v1/citas/${creada.body.citaId}`);

    expect(respuesta.status).toBe(200);
    expect(respuesta.body).toEqual({ citaId: creada.body.citaId, estado: 'cancelada' });
  });
});

describe('Cuerpo que no es JSON (error escondido)', () => {
  const app = crearAppDePrueba();

  test('responde 400 con el esquema Error si el cuerpo no es JSON válido', async () => {
    const respuesta = await request(app)
      .post('/api/v1/citas')
      .set('Content-Type', 'application/json')
      .send('{"clienteId": ');

    expect(respuesta.status).toBe(400);
    expect(respuesta.body).toEqual({
      codigo: 'JSON_INVALIDO',
      mensaje: 'El cuerpo de la petición no es JSON válido',
    });
  });
});
