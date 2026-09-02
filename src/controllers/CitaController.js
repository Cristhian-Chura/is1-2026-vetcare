// Punto de entrada HTTP. Su única responsabilidad es traducir HTTP <-> dominio.
// La validación de campos obligatorios replica components.schemas.BaseCita.required
// del contrato OpenAPI v3.2.0 (clienteId, fecha, hora, mascotaId).
const CAMPOS_REQUERIDOS = ['clienteId', 'fecha', 'hora', 'mascotaId'];

function crearCitaHandler(citaFacade) {
  return async function crearCita(req, res) {
    const body = req.body || {};
    const faltantes = CAMPOS_REQUERIDOS.filter((campo) => !body[campo]);

    if (faltantes.length > 0) {
      return res.status(400).json({
        codigo: 'CAMPOS_FALTANTES',
        mensaje: `Faltan campos obligatorios: ${faltantes.join(', ')}`,
      });
    }

    try {
      const cita = await citaFacade.crearCita(body);
      return res.status(201).json(cita.toResponse());
    } catch (error) {
      const status = error.status || 400;
      return res.status(status).json({
        codigo: error.codigo || 'ERROR_DESCONOCIDO',
        mensaje: error.message,
      });
    }
  };
}

module.exports = { crearCitaHandler };
