// Códigos HTTP del contrato OpenAPI con nombre (G25), compartidos por el
// controlador y la fachada para no repetir las cifras en cada capa.
const HTTP_OK = 200;
const HTTP_CREADO = 201;
const HTTP_SOLICITUD_INVALIDA = 400;
const HTTP_NO_ENCONTRADO = 404;
const HTTP_ERROR_INTERNO = 500;

module.exports = {
  HTTP_OK,
  HTTP_CREADO,
  HTTP_SOLICITUD_INVALIDA,
  HTTP_NO_ENCONTRADO,
  HTTP_ERROR_INTERNO,
};