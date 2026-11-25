# Guía de contribución del proyecto VetCare (equipo B-5)

## 1. Propósito y alcance

Esta guía regula cómo entra un cambio a `main`. Obliga a los cuatro integrantes del equipo B-5 y se aplica a todo cambio: código, pruebas, documentación y configuración. Lo que aquí dice «regla del curso» viene de la guía de laboratorio de la Semana 11; lo que dice «declaración del equipo» es una decisión nuestra, explicada en su fila.

## 2. Preparar el entorno

```bash
git clone https://github.com/Cristhian-Chura/is1-2026-vetcare.git
cd is1-2026-vetcare
npx npm@10 ci          # misma versión de npm que el CI
npm test
npm run lint
npm run format:check
```

## 3. El camino de un cambio

Issue en el tablero → rama (sección 4) → commits (sección 5) → pull request con la plantilla del repositorio → revisión de otro integrante → `npm test` anotado en el PR → integración → borrar la rama.

## 4. Política de ramas

| Elemento | Decisión | Fuente | Quién lo verifica |
|---|---|---|---|
| Tronco | `main` | Rama por defecto del repositorio | — |
| Nombre de una rama | `tipo/numIssue-descripcion-corta`, por ejemplo `fix/50-confirmar-estado`. Tipos: `feat`, `fix`, `refactor`, `docs`, `chore` | *Pro Git*, 3.4 (ramas de tema) | El revisor del PR |
| Vida máxima | 3 días calendario, del primer commit a la integración | *Accelerate*, cap. 4 (ramas de vida corta). Declaración del equipo: son dos sesiones por semana y 3 días cubren el intervalo entre ellas | El revisor del PR |
| Ramas abiertas a la vez | Máximo 4 (una por integrante) | *Accelerate*, cap. 4 | Cualquier integrante en *Branches* |
| Quién integra | Quien aprueba el PR lo integra con *merge*; nunca el autor sin aprobación | Regla del curso | Quien integra |
| Rama que supera su vida | Se parte: lo que funciona entra hoy por PR y el resto se registra como issue nuevo | Regla del curso | El revisor del PR |
| Prohibido sobre `main` | Push directo, `push --force`, `rebase` de commits publicados, borrar `main` | *Pro Git*, 3.6, p. 100 | Los ajustes de GitHub (sección 6) |

## 5. Política de commits

| Elemento | Decisión | Fuente | Quién lo verifica |
|---|---|---|---|
| Forma del resumen | `tipo(alcance): descripción en imperativo (#issue)`, por ejemplo `fix(citas): impide confirmar una cita no creada (#50)` | Prefijo: declaración del equipo. Imperativo: *Pro Git*, 5.2, p. 131 | El revisor, en la pestaña *Commits* |
| Longitud | Resumen de 72 caracteres como máximo, con el prefijo y el issue | Declaración del equipo: *Pro Git* sugiere unos 50, pero el prefijo y el número ocupan unos 20 | El revisor |
| Cuerpo | Opcional; tras una línea en blanco, explica el porqué | *Pro Git*, 5.2, p. 131 | El revisor |
| Idioma | Español, imperativo: «agrega», «corrige», «extrae» | Adaptación del curso | El revisor |
| Un cambio lógico por commit | No se mezclan asuntos; el formateo va en un commit aparte | *Pro Git*, 5.2, p. 130 | El revisor |
| Espacios en blanco | Ejecutar `git diff --check` antes de confirmar | *Pro Git*, 5.2, p. 130 | Quien confirma |
| Trazabilidad | Todo commit nombra su issue `(#n)`; en un refactor, además, la heurística (`G5`, `G30`…) | Regla del curso | El revisor |

## 6. Revisión e integración

- Ningún PR se integra sin la aprobación de otro integrante (regla del curso).
- Quien integra ejecuta `npm test` a mano sobre la rama del PR y pega la salida en el PR; la suite completa debe pasar (regla del curso, Semana 12).
- El CI debe estar en verde.
- En GitHub, la regla de `main` exige un PR con 1 aprobación y no permite *force push* ni borrar la rama.

## 7. Política de etiquetas y versiones

| Elemento | Decisión | Fuente | Quién lo verifica |
|---|---|---|---|
| Tipo | Anotada (`git tag -a`), siempre con mensaje | *Pro Git*, 2.6, p. 56 | `git for-each-ref refs/tags` muestra `tag` |
| Esquema | `v0.<semana>.0-<hito>`, por ejemplo `v0.8.0-expediente-proceso` | Declaración del equipo (no es numeración semántica) | Cualquier integrante |
| Qué se etiqueta | Cierre de cada sprint, cada producto de unidad y cada entrega al docente que deba poder rehacerse | *Pro Git*, 5.3, p. 162; Sommerville, § 25.4 | Cualquier integrante |
| Quién etiqueta | El administrador del repositorio, sobre `main` con `npm test` en verde | Declaración del equipo | El administrador |
| Notas | Capacidades nuevas, problemas conocidos y requisitos de plataforma | SWEBOK, KA 8, § 6.2 | El revisor de la entrega |
| Envío | `git push origin <etiqueta>` (el push normal no las sube) | *Pro Git*, 2.6, p. 58 | `git ls-remote --tags origin` |

## 8. Política de paquetes y dependencias

| Elemento | Decisión | Cuidado (SWEBOK, KA 4, § 2.4) | Quién lo verifica |
|---|---|---|---|
| Declaración versionada | `package.json` y `package-lock.json` siempre en el repositorio | Monitoreo de lo que entra | El revisor del PR |
| Versiones fijas | El `package-lock.json` fija la versión exacta; se instala con `npx npm@10 ci` | Propagación de defectos o vulnerabilidades | El CI |
| Producción y desarrollo | Herramientas de prueba, análisis y formato van en `devDependencies` | Dependencias innecesarias en producción | El revisor del PR |
| Entrada por PR | Una dependencia nueva entra solo por PR que responde: ¿para qué se necesita y qué se reutiliza?, ¿cuál es su licencia?, ¿quién la mantiene? | Innecesarias, conflictos de licencia, no confiables | El revisor: si cambia `package.json`, deben estar las tres respuestas |

## 9. Enlaces

- Estándar de construcción de la Semana 10: `eslint.config.js` y los scripts `npm run lint` y `npm run format:check` de `package.json`.
- Criterios de calidad (DoD y DoR): la plantilla de pull request de `.github/` y el anexo al final de esta guía.

## 10. Qué se verifica, quién y cómo

| Política | Qué se verifica | Quién | Cómo |
|---|---|---|---|
| Ramas | Nombre, vida y aprobación | Revisor del PR | Nombre de la rama y fechas en el PR |
| Commits | Forma, longitud e issue | Revisor del PR | Pestaña *Commits* |
| Etiquetas | Anotada, con notas y en el servidor | Administrador | `git ls-remote --tags origin` |
| Dependencias | Ubicación y tres respuestas | Revisor del PR | Diff de `package.json` |
| Pruebas | Prueba vista en rojo, suite en verde, nada apagado | Revisor y quien integra | Registro de ciclos y salida de npm test en el PR |
| Configuración | Nada de valores reales ni secretos en el código, el historial o la imagen | Revisor del PR | Diff y prueba de fuego |
| Errores | Nada de catch vacíos; fallos inesperados como 500 con evento | Revisor del PR | Diff y pruebas del error |

## 11. Política de pruebas

| Elemento | Decisión | Fuente | Quién lo verifica |
|---|---|---|---|
| Marco y herramienta | Jest 30 (familia xUnit para JavaScript, declarado) con su cobertura integrada (Istanbul). La suite completa se ejecuta con `npm test`; la cobertura, con `npx jest --coverage --collectCoverageFrom="src/**/*.js" --collectCoverageFrom="!src/server.js"` | Documentación oficial de Jest | Quien integra |
| Dónde viven | Pruebas unitarias en `test/unit/<Modulo>.test.js`; pruebas de integración HTTP en `test/*.integration.test.js` (Supertest) | Declaración del equipo | El revisor del PR |
| Prueba primero | Toda lógica nueva del núcleo, o toda función existente del núcleo que se modifique, llega con pruebas que se vieron fallar antes del código; el registro de ciclos va en la descripción del PR | Regla del curso; Beck (2002), prefacio | El revisor del PR |
| Integración limpia | La suite completa pasa antes de integrar; quien integra ejecuta `npm test` a mano sobre la rama y pega la salida en el PR | Regla del curso; Beck (2002), cap. 27 | Quien integra |
| Nada se apaga | Ninguna prueba se comenta, se borra ni se marca con `test.skip`, `test.only` o `xit` para que la suite pase | Beck (2002), cap. 27 | El revisor, en el diff |
| Pruebas aisladas | Cada prueba prepara sus propios datos; no depende de otra prueba, de la red ni de una base de datos real; los colaboradores se simulan con `jest.fn()` | Martin (2008), cap. 9, F.I.R.S.T. | El revisor del PR |
| Defectos insertados | Se insertan solo en la copia local para comprobar que una prueba los detecta, y se deshacen con `git restore`; nunca se integran | Regla del curso | El revisor, en el diff |

## 12. Política de configuración y secretos

| Elemento | Regla del equipo | Fuente | Quién lo verifica |
|---|---|---|---|
| Qué es configuración | Todo lo que cambia entre despliegues: puerto, conexión a la base de datos, horario de atención. Se lee del entorno en `src/config.js`; el enrutamiento y los módulos se quedan en el código | Wiggins (2017), factor III | El revisor del PR |
| Plantilla | `.env.example` declara cada variable, qué controla, si es secreta y un valor de ejemplo inofensivo; nunca un valor real | Wiggins (2017), factor III; lectura del curso | El revisor del PR |
| Archivos locales excluidos | `.env` y `.env.*` están en `.gitignore` (excepto `.env.example`) y en `.dockerignore` | Wiggins (2017), factor III | El revisor, en el diff |
| Valores por defecto | Ninguna variable de configuración tiene un valor real por defecto en el código: si falta, la aplicación no arranca y dice cuál falta | Wiggins (2017), factor III | El revisor del PR |
| Secretos | Prohibidos en el código, en el historial y en la imagen. En CI van en GitHub Secrets; en local, en `.env` | Wiggins (2017), factor III; Acta de Retrospectiva de Medio Sprint 1, acuerdo 4 | El revisor, en el diff |
| Si un secreto entra | Se cambia en el servicio que lo emitió y se registra en el informe por su ubicación y su tipo; borrar el archivo no basta | Guía de referencia rápida de la Semana 14, apartado 3 («La configuración fuera del código»), regla del secreto expuesto | Quien lo detecta |

## 13. Política de manejo de errores

| Elemento | Regla del equipo | Fuente | Quién lo verifica |
|---|---|---|---|
| Cómo se comunica un error | Con una excepción, no con un código de retorno. Los errores de negocio llevan `codigo` y `status`; el dominio lanza `TransicionInvalidaError` | Martin (2008), cap. 7, p. 104 | El revisor del PR |
| Contexto del mensaje | Qué operación era y qué valor llegó (por ejemplo, la hora recibida); nunca credenciales ni datos personales | Martin (2008), cap. 7, p. 107; SWEBOK KA 4, § 4.5 | El revisor del PR |
| Excepciones de bibliotecas externas | Se traducen en el borde: el cuerpo que no es JSON se convierte en `JSON_INVALIDO` en `src/middleware/jsonInvalido.js`; los fallos de MySQL llegan a `responderError` como error interno | Martin (2008), cap. 7, p. 108 | El revisor del PR |
| Bloque de captura vacío | Prohibido. Todo `catch` traduce, registra o relanza | SWEBOK KA 4, § 4.5, p. 4-11 | El revisor, en el diff |
| Fallo inesperado | Responde 500 con `ERROR_INTERNO` sin el mensaje interno, y se escribe un evento de nivel error con la operación y el motivo | SWEBOK KA 4, § 4.5; Wiggins (2017), factor XI | El revisor del PR |
| Nulos | Ninguna función devuelve ni recibe nulo, salvo `buscarPorId` del repositorio, que devuelve `null` si la cita no existe: es su contrato y la fachada lo traduce a 404 | Martin (2008), cap. 7, pp. 110-111 | El revisor del PR |
| Prueba primero | Todo manejo de error nuevo se escribe con la prueba que fuerza el error, vista en rojo | Martin (2008), cap. 7, pp. 105-106 | El revisor, en el registro de ciclos |

## Anexo: criterios de calidad (DoD y DoR)
- **Definición de Terminado (DoD)**: Todo PR debe satisfacer el checklist de 7 criterios definido en `.github/pull_request_template.md`.
- **Definición de Preparado (DoR)**: Todo issue debe incluir sus criterios de aceptación, RF-00X, endpoint afectado, SP y deudas de especificación con destinatario y supuesto.
- Consulta el documento completo en [`/docs/proceso/paquete-acuerdos-semana3.md`](docs/proceso/paquete-acuerdos-semana3.md).