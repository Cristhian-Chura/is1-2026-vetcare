// Factor III: todo lo que cambia entre despliegues se lee del entorno.
// Los nombres y un valor de ejemplo inofensivo están en .env.example; los valores reales, nunca en el código.

const VARIABLES_REQUERIDAS = ['PORT', 'DATABASE_URL', 'HORA_APERTURA', 'HORA_CIERRE'];
/**
 * Lee la configuración del entorno.
 */
function leerConfiguracion(entorno) {

  const faltantes = VARIABLES_REQUERIDAS.filter((nombre) => !entorno[nombre]);
  if (faltantes.length > 0) {
    throw new Error(`Faltan variables de entorno: ${faltantes.join(', ')} (revise .env.example)`);
  }
  return {
    puerto: Number(entorno.PORT),
    databaseUrl: entorno.DATABASE_URL,
    horario: { apertura: Number(entorno.HORA_APERTURA), cierre: Number(entorno.HORA_CIERRE) },
  };
}

module.exports = { leerConfiguracion };