const { HTTP_SOLICITUD_INVALIDA } = require('../shared/httpStatus');

/**
 * Traduce el error de Express ante un cuerpo que no es JSON al esquema Error del contrato.
 * Cualquier otro error sigue al siguiente manejador.
 */
// eslint-disable-next-line max-params -- Express reconoce un manejador de errores por sus cuatro parámetros
function manejarJsonInvalido(error, req, res, next) {
  return res.status(HTTP_SOLICITUD_INVALIDA).json({
    codigo: 'JSON_INVALIDO',
    mensaje: 'El cuerpo de la petición no es JSON válido',
  });
}

module.exports = { manejarJsonInvalido };