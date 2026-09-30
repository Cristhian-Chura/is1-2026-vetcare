// Punto de entrada HTTP. Su única responsabilidad es traducir HTTP <-> dominio.
// La validación de campos obligatorios replica components.schemas.BaseCita.required
// del contrato OpenAPI v3.0.3 (clienteId, fecha, hora, mascotaId).
const CAMPOS_REQUERIDOS = ['clienteId', 'fecha', 'hora', 'mascotaId'];

/**
 * Crea una cita a partir de una petición HTTP y devuelve CitaResponse.
 */
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

/**
 * Obtiene una cita por su identificador y traduce el resultado al contrato HTTP.
 */
function obtenerCitaHandler(citaFacade) {
  return async function obtenerCita(req, res) {
    try {
      const cita = await citaFacade.obtenerCita(req.params.citaId);
      return res.status(200).json(cita.toResponse());
    } catch (error) {
      const status = error.status || 500;
      return res.status(status).json({
        codigo: error.codigo || 'ERROR_DESCONOCIDO',
        mensaje: error.message,
      });
    }
  };
}

module.exports = { crearCitaHandler, obtenerCitaHandler };
