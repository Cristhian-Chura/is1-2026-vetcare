// Factor III: todo lo que cambia entre despliegues se lee del entorno.
// Los nombres y un valor de ejemplo inofensivo están en .env.example; los valores reales, nunca en el código.

/**
 * Lee la configuración del entorno.
 */
function leerConfiguracion(entorno) {
  return {
    puerto: Number(entorno.PORT),
    databaseUrl: entorno.DATABASE_URL,
    horario: { apertura: Number(entorno.HORA_APERTURA), cierre: Number(entorno.HORA_CIERRE) },
  };
}

module.exports = { leerConfiguracion };