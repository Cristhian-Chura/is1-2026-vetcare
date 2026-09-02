# Código Fuente - VetCare 🐾

Este directorio contiene la implementación del backend de VetCare, estructurado para cumplir con el contrato OpenAPI y utilizando una arquitectura basada en capas.

## Estructura de la Rebanada Vertical
El código está organizado de la siguiente manera para separar responsabilidades y evitar el acoplamiento:

* **`controllers/`**: Maneja las peticiones HTTP, valida esquemas y desempaqueta los DTOs.
* **`routes/`**: Define los endpoints de la API (ej. `POST /api/v1/citas`).
* **`services/`**: Contiene la lógica de negocio pura y la orquestación (Fachada).
* **`domain/`**: Entidades principales y reglas del negocio.
* **`repositories/`**: Capa de persistencia (implementada en memoria para la primera iteración).
* **`app.js` / `server.js`**: Configuración e inicialización del servidor Express.

## Ejecución Local
Para levantar el servidor en tu entorno local:
1. Asegúrate de haber ejecutado `npm install` en la raíz del proyecto.
2. Ejecuta el comando de inicio (ej. `node src/server.js`).

## Pruebas
Las pruebas de integración automatizadas que validan estos endpoints se encuentran fuera de esta carpeta, en el directorio `/test` de la raíz del repositorio.