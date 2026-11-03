# Registro de hallazgos – Auditoría 29110 a INTI MAR

Registro emitido por el equipo B-5 VetCare en su rol de equipo auditor. Auditoría contra el Perfil Básico de ISO/IEC 29110.

## 1. Identificación

**Equipo auditado:** INTI MAR (Ronald Choquehuanca Rafael, Danny Yair Luque Pari, Stip Leonel Yordy Corimaya Chura, Luciano Fabricio Velez Miranda, Oscar Alejandro Ticona Fernandez)

**Equipo auditor:** B-5 VetCare (Cristian Chura Peralta, Luis David Cruz Llica, Jose Antonio Vilcanqui Chambi, Alexis Erik Ricardo Condori Rivera)

**Fecha de la auditoría:** 13/10/2026

**Alcance:** Semanas 1 a 7

**Estado del repositorio auditado:** rama main en el commit 7380062 (13/10/2026)

## 2. Método y límites

Se contrastó la evidencia declarada contra los catorce resultados de ISO/IEC 29110-5-1-2:2025 (6.2 y 7.2) con el checklist del curso y sus tres estados. Solo se consideró lo que el auditor pudo abrir con fecha verificable.

## 3. Verificación previa: condiciones de entrada

| Condición de entrada | Evidencia declarada por el auditado | Observación del auditor |
| --- | --- | --- |
| Acuerdo del proyecto documentado, aprobado y en línea base antes del inicio | No declarada (celda vacía) | Se encontró el tag [linea-base-heredada](https://github.com/ROONCHR/is1-2026--inti_mar-/tags) (28/08/2026, 06a385e) y el README con el paquete heredado, pero el auditado no lo declaró ni enlazó un acuerdo aprobado. |
| Estudio de factibilidad antes del inicio | No declarada | No se encontró evidencia. |
| Equipo asignado y capacitado | No declarada | El README raíz lista 5 integrantes con código y rol; no se declaró como evidencia. |
| Ciclo de vida documentado | No declarada | Existe S02_Expediente_Proceso_INTIMAR.pdf (PR #17, 03/09/2026) con «mapeo SWEBOK y justificación del ciclo de vida»; no se declaró aquí. |
| Bienes, servicios e infraestructura disponibles | No declarada | Repositorio y tablero disponibles; no hay workflows de GitHub Actions en el repositorio. |

## 4. Tabla de hallazgos

| Resultado | Evidencia abierta (enlace y fecha) | Estado | Observación del auditor (qué vio, qué faltó) | Auditor |
| --- | --- | --- | --- | --- |
| PM.O1 (6.2) | [S02_Expediente_Proceso_INTIMAR.pdf](https://github.com/ROONCHR/is1-2026--inti_mar-/blob/main/docs/proceso/S02_Expediente_Proceso_INTIMAR.pdf) (PR #17, 03/09/2026) · [velocidad_burndown.md](https://github.com/ROONCHR/is1-2026--inti_mar-/blob/main/docs/proceso/velocidad_burndown.md) (24/09/2026) | Evidenciado en parte | El enlace declarado apunta a una rama feature; el archivo también está en main. El reporte de velocidad declara inicio 03/09 y estimación de 30 PH. Falta: revisión y aceptación del plan por el cliente; no hay un plan con recursos asignados. | B-5 |
| PM.O2 (6.2) | [Commit 470e8e7](https://github.com/ROONCHR/is1-2026--inti_mar-/commit/470e8e70c696eb145d21497ddb489e0544411214) (24/09/2026) · [reporte-velocidad-cierre.md](https://github.com/ROONCHR/is1-2026--inti_mar-/blob/main/docs/proceso/reporte-velocidad-cierre.md) (04/10/2026) · [plan-mejora-sprint1.md](https://github.com/ROONCHR/is1-2026--inti_mar-/blob/main/docs/proceso/plan-mejora-sprint1.md) (04/10/2026) | Evidenciado en parte | Se monitorea el avance (parcial 18 de 30 PH al 23/09; cierre 21 PH). Inconsistencias: el reporte de cierre deja «[completar]» en puntos comprometidos y pendientes; el parcial proyecta 26 días y cierre 09/10, el de cierre usa 10 días hábiles. Falta: aprobación del cliente a los cambios del plan y registro de aceptación. | B-5 |
| PM.O3 (6.2) | [Lista de issues](https://github.com/ROONCHR/is1-2026--inti_mar-/issues) (12 issues, 26/08 a 13/10/2026) · PR #9, #10, #11 de cambios al OpenAPI (01-02/09/2026) | Evidenciado en parte | El enlace declarado es la lista general, no un issue concreto. Los cambios al contrato se registran en PR, pero no hay análisis de impacto en costo, cronograma o técnica ni aprobación del cliente. No se encontraron issues con la etiqueta deuda-especificacion que exige su propia DoR. | B-5 |
| PM.O4 (6.2) | [retrospectiva.md](https://github.com/ROONCHR/is1-2026--inti_mar-/blob/main/docs/proceso/retrospectiva.md) (24/09/2026) · Retrospectiva-sprint1.pdf (04/10/2026) · [README de acuerdos](https://github.com/ROONCHR/is1-2026--inti_mar-/blob/main/docs/proceso/README.md) (09/09/2026) | Evidenciado en parte | Hay reuniones de revisión del equipo con acuerdos registrados (5 fricciones con responsable). El enlace declarado apunta a una rama que se fusionó a main recién el 13/10 (PR #35). Falta: reuniones con el cliente; los acuerdos de la retro no se cumplen (ver PM.O7). El plan de mejora cita «retrospectiva-sprint1.md», archivo que no existe. | B-5 |
| PM.O5 (6.2) | [Vista 6 «Deuda y Mejoras»](https://github.com/users/ROONCHR/projects/2/views/6) (3 elementos, creados 30/09/2026) | Evidenciado en parte | La fecha declarada (29/10/2026) es posterior a la auditoría. La vista contiene solo deuda técnica (ISS-31, 32, 33), no un registro de riesgos. Las fricciones de la retrospectiva identifican problemas durante el proyecto. Falta un registro de riesgos con probabilidad e impacto. | B-5 |
| PM.O6 (6.2) | [Release v0.2.0-vertical-slice](https://github.com/ROONCHR/is1-2026--inti_mar-/releases) (04/09/2026) · [Tag linea-base-heredada](https://github.com/ROONCHR/is1-2026--inti_mar-/tags) (28/08/2026) · DoD criterios 4 y 5 (convención de commits y ramas) | Evidenciado en parte | Hay estrategia de ramas y commits, línea base etiquetada y release. Falta control efectivo: el commit fcb4f1f (22/09) entró directo a main sin PR, y la propia DoD reconoce referencias erróneas a issues. Además, src/.env con credenciales de base de datos está versionado en main. | B-5 |
| PM.O7 (6.2) | [README de acuerdos y DoD](https://github.com/ROONCHR/is1-2026--inti_mar-/blob/main/docs/proceso/README.md) (09/09/2026; revisado 29/09/2026) | Evidenciado en parte | La fecha declarada (29/02/2026) no existe. La DoD exige aprobación de un par antes de integrar a main, pero los PR #17, #18, #20, #22, #25, #26 y #35 muestran «No reviews». La acción 2 del plan de mejora (plantilla de PR, entrada Semana 8) no tiene .github/pull_request_template.md en main al 13/10. | B-5 |
| SI.O1 (7.2) | [Tablero](https://github.com/users/ROONCHR/projects/2) (13/10/2026) · [Issue #24](https://github.com/ROONCHR/is1-2026--inti_mar-/issues/24) (23/09 a 24/09/2026) · [Issue #19](https://github.com/ROONCHR/is1-2026--inti_mar-/issues/19) (09/09 a 10/09/2026) | Evidenciado en parte | Las tareas se ejecutan y se cierran con PR. Inconsistencias plan-tablero: ISS-01 (rebanada vertical) figura «In progress» aunque el issue #16 se cerró el 04/09; el plan estima 30 PH y la suma de estimaciones Done del tablero da 21; ISS-01 sin estimación. | B-5 |
| SI.O2 (7.2) | [docs/arquitectura](https://github.com/ROONCHR/is1-2026--inti_mar-/tree/main/docs/arquitectura) (SAD v1.0, 02/09/2026) · DoR en README de acuerdos (09/09/2026) | Evidenciado en parte | Hay SAD heredado en línea base y una DoR con criterios de aceptación. Falta: especificación de requisitos con análisis de corrección y capacidad de prueba, aprobación del cliente y trazabilidad requisito-cliente a requisito-software. | B-5 |
| SI.O3 (7.2) | [docs/contratos](https://github.com/ROONCHR/is1-2026--inti_mar-/tree/main/docs/contratos) (openapi 3.2.0.txt, 01-02/09/2026) · SAD v1.0 | Evidenciado en parte | Arquitectura y contrato de interfaces en el repositorio. El contrato está como .txt, no como .yaml/.json validable. No se encontró una matriz que establezca la trazabilidad con los requisitos. | B-5 |
| SI.O4 (7.2) | [Commit 50a5193](https://github.com/ROONCHR/is1-2026--inti_mar-/commit/50a51934707d2394b78d42e5994f5cd14312434b) (03/09/2026) · [pedidos.test.js](https://github.com/ROONCHR/is1-2026--inti_mar-/blob/main/src/tests/pedidos.test.js) | Evidenciado en parte | Se produce el componente POST /pedidos con 4 pruebas de integración HTTP (201, 400, 409, 400). No hay pruebas unitarias; su propio catálogo de deuda lo reconoce (hallazgo 1, ISS-31). | B-5 |
| SI.O5 (7.2) | [Release v0.2.0-vertical-slice](https://github.com/ROONCHR/is1-2026--inti_mar-/releases/tag/v0.2.0-vertical-slice) (d033ba6, 03-04/09/2026) · pedidos.test.js | Evidenciado en parte | Integración de la rebanada con pruebas. El auditado declara que no hay informe de pruebas ni CI; confirmado: no hay workflows en el repositorio. | B-5 |
| SI.O6 (7.2) | [Release v0.2.0-vertical-slice](https://github.com/ROONCHR/is1-2026--inti_mar-/releases/tag/v0.2.0-vertical-slice) (04/09/2026) · [README raíz](https://github.com/ROONCHR/is1-2026--inti_mar-) | Evidenciado en parte | Hay una versión en línea base. Falta documentación de usuario, operación y mantenimiento: el README raíz dice «Cómo se levanta: Pendiente hasta la semana 2» y src/README.md «Se completa desde la semana 2», ambos sin actualizar al 13/10. | B-5 |
| SI.O7 (7.2) | [PR #35](https://github.com/ROONCHR/is1-2026--inti_mar-/pull/35) (04/10 a 13/10/2026) | Evidenciado en parte | Confirmado lo que declara el auditado: solo hay verificación automática (Quality Gate) y «No reviews». Ninguno de los PR revisados tiene revisión humana registrada, en contradicción con el criterio 1 de su DoD. | B-5 |

## Tres hallazgos más graves

1. **PM.O7 / SI.O7:** la DoD exige aprobación de un par, pero ningún PR auditado tiene revisión humana («No reviews»).
2. **PM.O6:** credenciales de base de datos versionadas en src/.env y un push directo a main (fcb4f1f).
3. **PM.O2 / SI.O1:** los reportes de velocidad se contradicen (30 PH vs. 21 PH, 26 días vs. 10 días hábiles) y el de cierre tiene campos «[completar]».

## Equipo auditor

| Integrante | Código de estudiante |
| --- | --- |
| Cristian Chura Peralta | 2017-119049 |
| Luis David Cruz Llica | 2024-119060 |
| Jose Antonio Vilcanqui Chambi | 2024-119017 |
| Alexis Erik Ricardo Condori Rivera | 2023-119015 |
