// Factor III: todo lo que cambia entre despliegues se lee del entorno.
// Los nombres y un valor de ejemplo inofensivo están en .env.example; los valores reales, nunca en el código.
const VARIABLES_REQUERIDAS = ['PORT', 'DATABASE_URL', 'HORA_APERTURA', 'HORA_CIERRE'];

function leerHora(entorno, nombre) {
  const valor = Number(entorno[nombre]);
  if (!Number.isInteger(valor) || valor < 0 || valor > 24) {
    throw new Error(`${nombre} debe ser un número entero de 0 a 24 (revise .env.example)`);
  }
  return valor;
}

/**
 * Lee y valida la configuración; falla al arrancar, con el nombre de lo que falta y sin mostrar valores.
 */
function leerConfiguracion(entorno) {
  const faltantes = VARIABLES_REQUERIDAS.filter((nombre) => !entorno[nombre]);
  if (faltantes.length > 0) {
    throw new Error(`Faltan variables de entorno: ${faltantes.join(', ')} (revise .env.example)`);
  }
  return {
    puerto: Number(entorno.PORT),
    databaseUrl: entorno.DATABASE_URL,
    horario: { apertura: leerHora(entorno, 'HORA_APERTURA'), cierre: leerHora(entorno, 'HORA_CIERRE') },
  };
}

module.exports = { leerConfiguracion };