// Factor XI: cada evento es una línea JSON en la salida estándar, sin búfer ni archivos.
// Pauta: momento, nivel, operación y resultado; nunca datos personales ni secretos.
function registrar(nivel, evento) {
  const linea = { momento: new Date().toISOString(), nivel, ...evento };
  process.stdout.write(`${JSON.stringify(linea)}\n`);
}

const logger = {
  info: (evento) => registrar('info', evento),
  error: (evento) => registrar('error', evento),
};

module.exports = { logger };