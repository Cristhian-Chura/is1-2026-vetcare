const { crearApp } = require('./app');

const PUERTO = process.env.PORT || 3000;
const app = crearApp();

app.listen(PUERTO, () => {
  console.log(`VetCare API escuchando en http://localhost:${PUERTO}`);
});
