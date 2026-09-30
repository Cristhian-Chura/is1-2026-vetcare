const request = require('supertest');
const { crearApp } = require('../src/app');

describe('POST /api/v1/citas — rebanada vertical', () => {
  const app = crearApp();

  test('crea una cita y responde 201 con el esquema CitaResponse', async () => {
    const respuesta = await request(app)
      .post('/api/v1/citas')
      .send({
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
    const respuesta = await request(app)
      .post('/api/v1/citas')
      .send({ clienteId: 'cliente-01' });

    expect(respuesta.status).toBe(400);
    expect(respuesta.body).toHaveProperty('codigo');
  });

  test('responde 400 si el horario está fuera de la disponibilidad configurada', async () => {
    const respuesta = await request(app)
      .post('/api/v1/citas')
      .send({
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
  const app = crearApp();

  test('responde 200 y CitaResponse cuando la cita existe', async () => {
    const creada = await request(app)
      .post('/api/v1/citas')
      .send({
        clienteId: 'cliente-02',
        mascotaId: 'mascota-02',
        fecha: '2026-09-11',
        hora: '11:00',
        motivo: 'Vacunación',
      });

    const respuesta = await request(app)
      .get(`/api/v1/citas/${creada.body.citaId}`);

    expect(respuesta.status).toBe(200);
    expect(respuesta.body.citaId).toBe(creada.body.citaId);
    expect(respuesta.body.clienteId).toBe('cliente-02');
    expect(respuesta.body.mascotaId).toBe('mascota-02');
    expect(respuesta.body.estado).toBe('confirmada');
  });

  test('responde 404 con esquema Error cuando la cita no existe', async () => {
    const respuesta = await request(app)
      .get('/api/v1/citas/cita-inexistente');

    expect(respuesta.status).toBe(404);
    expect(respuesta.body).toEqual({
      codigo: 'CITA_NO_ENCONTRADA',
      mensaje: 'No existe una cita con id cita-inexistente',
    });
  });
});
