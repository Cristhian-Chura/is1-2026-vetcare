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
      .send({ clienteId: 'cliente-01' }); // faltan mascotaId, fecha, hora

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
