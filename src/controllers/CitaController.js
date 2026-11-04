// Punto de entrada HTTP. Su única responsabilidad es traducir HTTP <-> dominio.
// La validación de campos obligatorios replica components.schemas.BaseCita.required
// del contrato OpenAPI v3.0.3 (clienteId, fecha, hora, mascotaId).
const CAMPOS_REQUERIDOS = ['clienteId', 'fecha', 'hora', 'mascotaId'];

/**
 * Traduce un error de dominio a la respuesta HTTP del contrato.
 */
function responderError(res, error, statusPorDefecto) {
  const status = error.status || statusPorDefecto;
  return res.status(status).json({
    codigo: error.codigo || 'ERROR_DESCONOCIDO',
    mensaje: error.message,
  });
}

/**
 * Devuelve los campos obligatorios del contrato que no vienen en el cuerpo.
 */
function obtenerCamposFaltantes(body) {
  return CAMPOS_REQUERIDOS.filter((campo) => !body[campo]);
}

/**
 * Crea una cita a partir de una petición HTTP y devuelve CitaResponse.
 */
function crearCitaHandler(citaFacade) {
  return async function crearCita(req, res) {
    const body = req.body || {};
    const faltantes = obtenerCamposFaltantes(body);

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
      return responderError(res, error, 400);
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
      return responderError(res, error, 500);
    }
  };
}

module.exports = { crearCitaHandler, obtenerCitaHandler };
