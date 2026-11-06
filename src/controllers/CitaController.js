// Punto de entrada HTTP. Su única responsabilidad es traducir HTTP <-> dominio.
// La validación de campos obligatorios replica components.schemas.BaseCita.required
// del contrato OpenAPI v3.0.3 (clienteId, fecha, hora, mascotaId).
const CAMPOS_REQUERIDOS = ['clienteId', 'fecha', 'hora', 'mascotaId'];

const {
  HTTP_OK,
  HTTP_CREADO,
  HTTP_SOLICITUD_INVALIDA,
  HTTP_ERROR_INTERNO,
} = require('../shared/httpStatus');

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
      return res.status(HTTP_SOLICITUD_INVALIDA).json({
        codigo: 'CAMPOS_FALTANTES',
        mensaje: `Faltan campos obligatorios: ${faltantes.join(', ')}`,
      });
    }

    try {
      const cita = await citaFacade.crearCita(body);
      return res.status(HTTP_CREADO).json(cita.toResponse());
    } catch (error) {
      return responderError(res, error, HTTP_SOLICITUD_INVALIDA);
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
      return res.status(HTTP_OK).json(cita.toResponse());
    } catch (error) {
      return responderError(res, error, HTTP_ERROR_INTERNO);
    }
  };
}

module.exports = { crearCitaHandler, obtenerCitaHandler };
