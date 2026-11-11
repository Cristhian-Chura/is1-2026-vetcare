# Informe de auditoría contra el Perfil Básico de ISO/IEC 29110

Proyecto VetCare · Equipo B-5 · Unidad I (semanas 1 a 8)

## 1. Identificación

| Dato | Valor |
| --- | --- |
| Equipo auditado | B-5 VetCare (Cristian Chura Peralta, Luis David Cruz Llica, Jose Antonio Vilcanqui Chambi, Alexis Erik Ricardo Condori Rivera) |
| Equipo auditor | INTI MAR (Oscar Alejandro Ticona Fernandez, Stip Leonel Yordy Corimaya Chura, Danny Yair Luque Pari) |
| Fecha de la auditoría | 13/10/2026 |
| Alcance | Semanas 1 a 7 |
| Commit auditado | e15f52d |
| Repositorio | [is1-2026-vetcare](https://github.com/Cristhian-Chura/is1-2026-vetcare) |

## 2. Método y límites

- **Definición.** Una auditoría es un proceso sistemático, independiente y documentado para obtener evidencia objetiva y evaluarla frente a requisitos especificados (ISO/IEC TR 29110-1:2016, definición 3.7). La independencia la aportó un equipo par.
- **Resultados evaluados.** Los catorce resultados del Perfil Básico: PM.O1 a PM.O7 (cláusula 6.2) y SI.O1 a SI.O7 (cláusula 7.2) de ISO/IEC 29110-5-1-2:2025.
- **Estados.** Cada resultado se registró con uno de los tres estados del curso: **evidenciado**, **evidenciado en parte** o **sin evidencia**. Solo se consideró la evidencia que el auditor pudo abrir con fecha verificable.
- **Límites.**
  - Esta auditoría **no es una evaluación de conformidad**: la conformidad se establece contra ISO/IEC 29110-4-1, y la Parte 5-1-2 no define niveles de madurez (cláusula 0.2). Por eso no se declaran porcentajes ni niveles.
  - El checklist, los tres estados y el índice del informe son procedimientos del curso, no contenido de la norma.
  - La norma indica que los enunciados de sus tareas «are not imperative» (cláusula 4.2); se citan como descripción, no como obligación.
  - Toda atribución de un artefacto del equipo a un producto de trabajo de la norma es una **hipótesis del equipo**.

## 3. Verificación previa: condiciones de entrada

La cláusula 5.2 describe las condiciones que una VSE debería cumplir antes de iniciar el proyecto. Documento de evidencias declaradas por el equipo: [Auditoria.md](Auditoria.md).

| Condición de entrada | Evidencia | Situación |
| --- | --- | --- |
| Acuerdo del proyecto documentado, aprobado y en línea base antes del inicio | [Acta S1](https://docs.google.com/document/d/1jUZkRcT4q4bCKWoYHFjsfefQ8DZytEb5yrH3N3RFGH8/edit?usp=sharing) y etiqueta [linea-base-heredada](https://github.com/Cristhian-Chura/is1-2026-vetcare/tree/linea-base-heredada) (26/08/2026) | Con evidencia |
| Estudio de factibilidad realizado antes del inicio | No existe | Desviación D-01 |
| Equipo asignado y capacitado, incluida la gestión del proyecto | Acta S1, tabla de integrantes y roles | Con evidencia |
| Ciclo de vida documentado | [proceso-semana2.md](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/proceso-semana2.md) (02/09/2026) | Con evidencia |
| Bienes, servicios e infraestructura disponibles | [Repositorio](https://github.com/Cristhian-Chura/is1-2026-vetcare), [tablero](https://github.com/users/Cristhian-Chura/projects/1/views/1), [SonarCloud](https://sonarcloud.io/project/overview?id=is1-2026-vetcare) y [GitHub Actions](https://github.com/Cristhian-Chura/is1-2026-vetcare/actions) | Con evidencia |

## 4. Tabla de hallazgos

Registro recibido del equipo auditor INTI MAR (fuente: [Auditoria.md](Auditoria.md)). Los estados, las observaciones y el auditor de cada fila se copian sin alteración. La columna «Evidencia declarada por B-5» resume lo que el equipo declaró y enlazó. Las dos últimas columnas las agrega el equipo B-5: la atribución del producto de trabajo es una hipótesis y la desviación remite a la sección 5.

| Resultado | Evidencia declarada por B-5 | Estado (auditor) | Observación del auditor | Auditor | Producto de trabajo atribuido (hipótesis) | Desviación |
| --- | --- | --- | --- | --- | --- | --- |
| PM.O1 | Plan del Sprint 1 (10 SP planificados, inicio 21/09, duración 2 semanas) y ciclo de vida con cadencia de sprints (S2). [Reporte de velocidad parcial](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Reporte_Velocidad_Sprint1_VetCare.md) · [Ciclo de vida S2](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/proceso-semana2.md) · [Tablero vista 1](https://github.com/users/Cristhian-Chura/projects/1/views/1) | Evidenciado | Se verificó el Plan del Sprint 1 (10 SP planificados, inicio 21/09, duración de 2 semanas), el documento de ciclo de vida de la S2 ( proceso-semana2.md ) y la Vista 1 del tablero en GitHub Projects. | Stip | Plan del proyecto | D-02 |
| PM.O2 | Reporte de velocidad parcial, reporte final con burndown (10 SP planificados, 3 cerrados), plan de mejora. [Velocidad parcial](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Reporte_Velocidad_Sprint1_VetCare.md) · [Velocidad final](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Reporte_Velocidad_Sprint1_VetCare_FINAL_3SP.md) · [Plan de mejora](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Plan_Mejora_Proceso_Sprint1_VetCare.md) | Evidenciado | Se verificaron el reporte de velocidad parcial, el reporte final con el gráfico Burndown (10 SP planificados, 3 cerrados) y el plan de mejora de procesos. | Oscar | Registro de estado del avance | D-02, D-04 |
| PM.O3 | Deuda de especificación de POST /pagos (acta S1) y catálogo de deuda técnica (POST /pagos, DELETE /citas/{citaId}). [Acta S1](https://docs.google.com/document/d/1jUZkRcT4q4bCKWoYHFjsfefQ8DZytEb5yrH3N3RFGH8/edit?usp=sharing) · [Catálogo de deuda](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Catalogo_Deuda_Tecnica_Sprint1_VetCare.md) | Evidenciado | Se constató la gestión de solicitudes de cambio mediante el registro de deudas de especificación (POST /pagos en Acta S1) y el catálogo de deuda técnica (POST /pagos, DELETE /citas/{citaId}). | Oscar | Solicitud de cambio | D-02 |
| PM.O4 | Acuerdos de equipo S3, acta de retrospectiva de medio sprint, Sprint Retrospective y exportación del Miro. [Retro medio sprint](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Acta_Retrospectiva_Medio_Sprint1_VetCare.md) · [Sprint Retrospective](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Sprint_Retrospective_Final_Sprint1_VetCare.md) · [PDF Miro](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/evidencias/Sprint_Retrospective_Miro_Sprint1.pdf) · [Acuerdos_S3](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/paquete-acuerdos-semana3.md) | Evidenciado | Se confirmaron las reuniones de revisión a través de los acuerdos de equipo de la Semana 3 (Acuerdos_S3), el acta de retrospectiva de medio sprint, la Sprint Retrospective y la exportación en PDF de Miro. | Oscar | Registro de reuniones | D-02 |
| PM.O5 | Problemas identificados durante el proyecto, registrados como deuda técnica y de especificación (no hay registro de riesgos formal). [Catálogo de deuda técnica](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Catalogo_Deuda_Tecnica_Sprint1_VetCare.md) · [Acta S1](https://docs.google.com/document/d/1jUZkRcT4q4bCKWoYHFjsfefQ8DZytEb5yrH3N3RFGH8/edit?usp=sharing) | Evidenciado | Se registró la ausencia de un documento formal de riesgos; los problemas identificados durante el proyecto se declararon y gestionaron como deuda técnica y de especificación en el catálogo y en el Acta S1. | Oscar | Sin producto: no existe registro de riesgos | D-03 |
| PM.O6 | Convención de ramas y Conventional Commits (acta S1), PR #4, PR #16. [Acta S1](https://docs.google.com/document/d/1jUZkRcT4q4bCKWoYHFjsfefQ8DZytEb5yrH3N3RFGH8/edit?usp=sharing) · [PR #4](https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/4) · [PR #16](https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/16) | Evidenciado | Se comprobó la convención de ramas y Conventional Commits definida en el Acta S1, verificando el control de versiones en los Pull Requests #4 y #16. | (en blanco en el registro recibido) | Estrategia de control de versiones | D-02, D-05 |
| PM.O7 | Definición de Terminado (S3), revisión de pull requests, función de aptitud declarada. [Función de aptitud](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Funcion_Aptitud_Sprint1_VetCare.md) · [PR #16](https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/16) · DoD S3: [Acuerdos_S3](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/paquete-acuerdos-semana3.md) | Conforme. *(leído como evidenciado)* | Se verificó la función declarada en el repositorio. Automatización agendada para S15-S16. | Yair | Registro de verificación | D-05 |
| SI.O1 | Correspondencia entre el plan y el tablero del Sprint 1. [Tablero vista 1](https://github.com/users/Cristhian-Chura/projects/1/views/1) · [Reporte de velocidad parcial](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/Reporte_Velocidad_Sprint1_VetCare.md) | Evidenciado | Se verificó la correspondencia entre el plan de trabajo (10 SP planificados, inicio 21/09) y el estado real de los elementos en la Vista 1 del tablero del Sprint 1. | Stip | Plan del proyecto y tablero | — |
| SI.O2 | Paquete heredado de Diseño de Sistemas (SAD y contrato OpenAPI con RF-001 a RF-008) y Definición de Preparado (S3). [SAD](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/arquitectura/SAD%20V1.0.pdf) · [Contrato OpenAPI](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/contratos/OpenAPI.yaml) · DoR S3: [Acuerdos_S3](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/proceso/paquete-acuerdos-semana3.md) | Evidenciado | Se verificaron los requisitos en línea base a través del paquete heredado de Diseño de Sistemas (SAD v1.0 y contrato OpenAPI con RF-001 a RF-008) y los filtros de la Definición de Preparado (DoR S3). | Oscar | Especificación de requisitos (OpenAPI heredado) | D-02 |
| SI.O3 | SAD v1.0 y contrato OpenAPI v3.0.3 heredados. [SAD](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/arquitectura/SAD%20V1.0.pdf) · [Ruta_openAPI](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/docs/contratos/OpenAPI.yaml) | Conforme *(leído como evidenciado)* | Documento SAD V1.0.pdf y contrato OpenAPI verificados en docs/arquitectura/ en la rama main (Commit d558f9e), adoptados como línea base de arquitectura. | Yair | Diseño del software (SAD heredado) | — |
| SI.O4 | Rebanada vertical POST /citas de la Semana 2 (tag v0.2.0-vertical-slice, PR #1) e issue #5. [Issue #5](https://github.com/Cristhian-Chura/is1-2026-vetcare/issues/5) · [Tag v0.2.0-vertical-slice](https://github.com/Cristhian-Chura/is1-2026-vetcare/tree/v0.2.0-vertical-slice) · [PR #1 (merge de la rebanada, 02/09/2026)](https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/1) | Evidenciado | Se verificó la rebanada vertical POST /citas de la Semana 2 mediante la etiqueta v0.2.0-vertical-slice, el Issue #5 y la fusión del Pull Request #1 el 02/09/2026. | Stip | Componentes de software | D-06 |
| SI.O5 | Prueba de integración de la rebanada POST /citas; sin informe de pruebas formal (Unidad 2). [citas.integration.test.js](https://github.com/Cristhian-Chura/is1-2026-vetcare/blob/main/test/citas.integration.test.js) | Conforme *(leído como evidenciado)* | Existe suite de pruebas de integración con supertest probando POST /api/v1/citas. El pipeline ejecuta y pasa los tests correctamente (Commit 6721015). | Yair | Casos y procedimientos de prueba | D-07 |
| SI.O6 | No tenemos evidencia: el producto ensamblado corresponde a la Unidad 2 (README.md del repo como antecedente). [Repositorio](https://github.com/Cristhian-Chura/is1-2026-vetcare/) | Evidenciado en parte | Se constató el archivo README.md el repositorio como antecedente; no se presenta evidencia de documentación formal de usuario, operación ni mantenimiento por corresponder al producto ensamblado de la Unidad 2. | Oscar | Producto de software | D-07 |
| SI.O7 | Revisiones registradas en pull requests. [PR #16](https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/16) · [Commit de publicación](https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/16/changes/d329c73d3dc430dc4a7756cccb3ba44be096d473) | Evidenciado | Se comprobaron las tareas de verificación y validación registradas en las revisiones de Pull Requests (PR #16) y en los commits de publicación.. | Oscar | Registro de verificación | D-05 |

De los catorce resultados, trece quedaron registrados como evidenciados y uno como evidenciado en parte; ninguno quedó sin evidencia.

## 5. Respuesta del auditado

El equipo B-5 considera que el registro recibido es favorable en exceso, porque varios resultados que mencionan al cliente no cubren su enunciado completo. Por iniciativa propia declara las siguientes desviaciones respecto de ISO/IEC 29110-5-1-2:2025. Ningún resultado se presenta como cubierto cuando no lo está.

| ID | Referencia | Desviación | Justificación | Acción y momento |
| --- | --- | --- | --- | --- |
| D-01 | Cláusula 5.2 | No se realizó un estudio de factibilidad antes del inicio | El proyecto parte de un paquete heredado asignado por el curso; la evaluación inicial consistió en revisar y adoptar la línea base | Ninguna en la Unidad I; no se redacta un estudio retroactivo |
| D-02 | 6.2 (PM.O1–PM.O4, PM.O6); 7.2 (SI.O2) | No existe revisión, aceptación ni aprobación del cliente | No se designó quién ejerce el rol de cliente durante la Unidad I | Solicitar la designación y registrar la aceptación del plan del Sprint 2 |
| D-03 | 6.2 (PM.O5) | No existe registro de riesgos | El equipo no distinguió entre riesgo y deuda durante el Sprint 1 | Tipo «Riesgo» en el tablero, semana 10 |
| D-04 | 6.2 (PM.O2) | La desviación del Sprint 1 se analizó, pero aún no se corrigió | Las acciones correctivas ingresan en el Sprint 2 | Acciones M1 y M2 |
| D-05 | 6.2 (PM.O6, PM.O7); 7.2 (SI.O7) | El PR #1 se fusionó sin revisión y hubo tres commits directos a main | Configuración inicial de la integración continua en paralelo al sprint | Acciones M2 y M3 |
| D-06 | 7.2 (SI.O4) | Solo existen pruebas de integración, no pruebas unitarias | La construcción con TDD corresponde a la Unidad II | Unidad II |
| D-07 | 7.2 (SI.O5, SI.O6) | No hay informe de pruebas ni documentación de usuario, operación y mantenimiento | El producto ensamblado (MVP v1.0) corresponde a la Unidad II | Unidad II |

**Aclaración sobre «Conforme».** El término «Conforme», usado por el equipo auditor en PM.O7, SI.O3 y SI.O5, no corresponde a ninguno de los tres estados del curso. El equipo B-5 lo interpreta como «evidenciado» sin modificar el registro recibido.

## 6. Hipótesis de la semana 7 corregidas

Las etiquetas de proceso del tablero usaban la nomenclatura de las guías Deployment Package. Se tradujeron a la edición 2025 de la norma:

| Hipótesis de la semana 7 | Corrección (edición 2025) |
| --- | --- |
| PM.1 a PM.4 | PM.01 a PM.04 |
| SI.1 a SI.6 | SI.01 a SI.06, con la incorporación de SI.01 *Software implementation initiation* |
| *Statement of Work* | *Agreement* |
| SI.6 *Product Delivery* | Se separa en SI.06 *Software product assembly* y PM.04 *Project closure*; esta última queda reservada para la entrega formal, que todavía no ha ocurrido |

## 7. Acciones derivadas

| Acción | Resultado que atiende | Responsable | Momento | Indicador |
| --- | --- | --- | --- | --- |
| M1. Checklist obligatorio de DoR | PM.O1, SI.O1 | Cristian Chura | Sprint 2 (semana 10) | 100 % de issues con DoR antes de In Progress |
| M2. Checklist de DoD antes de la fusión y de Done | PM.O7, SI.O7 | Luis Cruz | Sprint 2 (semana 10) | 100 % de elementos en Done con evidencias completas |
| M3. Validación previa de cambios de CI/CD | PM.O6, PM.O7 | Alexis Condori | Sprint 2 (semana 10) | 0 cambios directos a main sin revisión (línea base: 3) |
| M4. Registro de tiempos de espera en el tablero | PM.O2 (asignación propuesta por el equipo; no figura en la matriz de trazabilidad del expediente) | Jose Vilcanqui | Sprint 2 (semana 10) | 100 % de issues con días de permanencia por estado |
| M5. Credenciales exclusivamente en GitHub Secrets | PM.O6 | Jose Vilcanqui | Sprint 2 (semana 10) | 0 credenciales expuestas |
| Función de aptitud: automatizar Quality Gate y acciones fijadas por SHA (deuda D1) | PM.O7 | Cristian Chura | Semanas 15 y 16 | Quality Gate aprobado y acciones del workflow fijadas por SHA |
| Consultar al responsable del contrato sobre POST /pagos (deuda D3) | PM.O3, SI.O2 | Alexis Condori | Sprint 2 | Deuda cerrada |
| Crear el tipo «Riesgo» en el tablero (D-03) | PM.O5 | Cristian Chura | Sprint 2 (semana 10) | Al menos un riesgo revisado por semana |
| Designar al cliente y registrar la aceptación del plan del Sprint 2 (D-02) | PM.O1 a PM.O4, PM.O6, SI.O2 | Equipo B-5 (por asignar) | Sprint 2 | Aceptación del plan registrada |
| Pruebas unitarias e informe de pruebas (D-06, D-07) | SI.O4, SI.O5 | Equipo B-5 (por asignar) | Unidad II | Pruebas unitarias e informe de pruebas publicados |
| Documentación de usuario, operación y mantenimiento (D-07) | SI.O6 | Equipo B-5 (por asignar) | Unidad II (MVP v1.0) | Documentación publicada con el MVP v1.0 |
