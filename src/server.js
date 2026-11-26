const { crearApp } = require('./app');
const { leerConfiguracion } = require('./config');
const { CitaRepositoryEnMemoria } = require('./repositories/CitaRepository');

const config = leerConfiguracion(process.env);
const app = crearApp({ horario: config.horario, citaRepository: new CitaRepositoryEnMemoria() });

app.listen(config.puerto, () => {
  console.log(`VetCare API escuchando en el puerto ${config.puerto}`);
});