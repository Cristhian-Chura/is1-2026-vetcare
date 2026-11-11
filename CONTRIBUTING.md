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
- Ningún PR se integra sin el resultado de `npm test` anotado en su descripción (regla del curso).
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

## Anexo: criterios de calidad (DoD y DoR)
- **Definición de Terminado (DoD)**: Todo PR debe satisfacer el checklist de 7 criterios definido en `.github/pull_request_template.md`.
- **Definición de Preparado (DoR)**: Todo issue debe incluir sus criterios de aceptación, RF-00X, endpoint afectado, SP y deudas de especificación con destinatario y supuesto.
- Consulta el documento completo en [`/docs/proceso/paquete-acuerdos-semana3.md`](docs/proceso/paquete-acuerdos-semana3.md).