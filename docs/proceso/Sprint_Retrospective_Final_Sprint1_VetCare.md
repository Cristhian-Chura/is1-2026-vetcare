# Sprint Retrospective Final — Sprint 1

**Proyecto:** Sistema de gestión de clínica veterinaria — VetCare  
**Curso:** Ingeniería de Software I (IS1-2026)  
**Equipo:** B-5  
**Sprint:** Sprint 1  
**Duración:** 2 semanas (10 días hábiles)  
**Fecha de inicio:** 21/09/2026  
**Fecha de cierre:** 02/10/2026  

---

## 1. Objetivo

Registrar las observaciones finales del Sprint 1, contrastar las acciones de mejora acordadas durante la retrospectiva de medio sprint e identificar los principales cuellos de botella observados por el equipo.

La retrospectiva se basa en evidencia verificable del tablero de GitHub Projects, Pull Requests, GitHub Actions, SonarCloud y los artefactos publicados en `/docs/proceso`.

---

## 2. Estado del Sprint al cierre

El Sprint 1 fue planificado con **10 Story Points**.

Al cierre del tablero:

- Issue #2 — Todo — 2 SP.
- Issue #3 — In Progress — 2 SP.
- Issue #5 — Done — 3 SP.
- Issue #8 — In Progress — 3 SP.
- Issue #10 — In Progress — sin Story Points.

La velocidad de cierre utilizada por el equipo es de **3 SP**, correspondientes al Issue #5.

---

## 3. Observaciones por integrante

### 3.1. Alexis Erik Ricardo Condori Rivera

**Elemento inspeccionado:** Herramientas.

**Observación:**  
Durante la configuración y uso de SonarCloud se presentaron errores y alertas que bloquearon temporalmente el análisis del repositorio y retrasaron la obtención de resultados para el catálogo de deuda técnica.

**Evidencia:**  
Ejecuciones del workflow de GitHub Actions / SonarCloud y posteriores correcciones de configuración.

**Estado al cierre:**  
La observación se mantiene. Además, el catálogo de deuda técnica fue actualizado con tres hallazgos priorizados, manteniendo diferenciados sus orígenes.

**Aprendizaje:**  
Los cambios de CI/CD deben validarse antes de integrarse y deben contar con una segunda revisión cuando afecten la calidad o seguridad del pipeline.

---

### 3.2. Jose Antonio Vilcanqui Chambi

**Elemento inspeccionado:** Procesos.

**Observación:**  
Durante la configuración del flujo de integración continua se utilizó una credencial fuera del mecanismo previsto de GitHub Secrets, por lo que posteriormente fue necesario revocarla.

**Evidencia:**  
Comunicación del equipo relacionada con el uso y posterior revocación de la credencial.

**Estado al cierre:**  
La observación se mantiene.

**Aprendizaje:**  
Las credenciales y tokens deben almacenarse exclusivamente en mecanismos seguros del repositorio y no compartirse mediante canales informales del equipo.

---

### 3.3. Luis David Cruz Llica

**Elemento inspeccionado:** Definición de Terminado.

**Observación:**  
Durante la consolidación del tablero surgieron dificultades para determinar si un elemento debía considerarse `Done` únicamente porque su Pull Request había sido fusionado.

El Issue #3 mostró que un merge no demuestra por sí solo el cumplimiento de todos los criterios de la Definition of Done.

**Evidencia:**  
Issue #3, PR #4 y revisión de la DoD del equipo.

En la segunda mitad del Sprint, el Issue #5 se utilizó como caso de mejora: se incorporaron pruebas automatizadas, README, CI, SonarCloud y revisión de otro integrante.

**Estado al cierre:**  
La observación se mantiene y produjo una mejora concreta en el tratamiento del Issue #5.

**Aprendizaje:**  
La DoD debe comprobarse antes de mover una tarjeta a `Done`, no después del merge.

---

### 3.4. Cristian Chura Peralta

**Elemento inspeccionado:** Procesos.

**Observación:**  
La preparación incompleta de algunos elementos, junto con la ausencia inicial de Story Points y referencias de requisitos, contribuyó al estancamiento del burndown durante la primera parte del Sprint.

**Evidencia:**  
Estado inicial del tablero, medición de medio Sprint y necesidad de completar información de las tarjetas.

**Estado al cierre:**  
La observación se mantiene.

**Aprendizaje:**  
La Definition of Ready debe verificarse antes del inicio del Sprint para evitar que el equipo descubra requisitos faltantes durante la ejecución.

---

## 4. Contraste de las acciones acordadas en Semana 6

### Acción 1 — Validación segura de CI/CD

**Responsable:** Alexis Erik Ricardo Condori Rivera.

**Acción acordada:**  
Realizar cambios de CI/CD en una rama o mediante revisión de otro integrante antes de afectar el flujo principal y utilizar GitHub Secrets para credenciales.

**Estado al cierre:** **Parcialmente cumplida.**

**Evidencia observada:**

- Los cambios posteriores de CI/CD fueron realizados mediante ramas y Pull Requests.
- GitHub Actions fue utilizado para ejecutar las pruebas.
- SonarCloud volvió a ejecutar el Quality Gate.
- El PR #15 obtuvo Quality Gate `Passed`.

**Pendiente:**  
Formalizar esta validación como práctica obligatoria para todos los cambios futuros de workflow.

---

### Acción 2 — Verificación previa de DoR y DoD

**Responsable:** Cristian Chura Peralta.

**Acción acordada:**  
Verificar antes de iniciar o cerrar una tarjeta que incluya requisito, operación, caso de prueba, Story Points y las evidencias requeridas por DoR/DoD.

**Estado al cierre:** **Parcialmente cumplida.**

**Evidencia observada:**

El Issue #5 contó finalmente con:

- RF-003.
- Operación `GET /citas/{citaId}` / `obtenerCita`.
- Caso TST-05.
- 3 Story Points.
- Pruebas automatizadas.
- Actualización del README.
- CI y SonarCloud.
- Revisión de otro integrante.

**Pendiente:**  
Aplicar el checklist desde el inicio de cada elemento y no como corrección posterior.

---

## 5. Cuellos de botella identificados

### 5.1. Falta de historial suficiente para medir tiempos de espera por columna

**Clasificación:** Fricción de herramientas.

La guía de cierre exige sustentar los cuellos de botella mediante días de espera observados en el tablero. En el estado actual del equipo no se dispone de un historial consolidado que permita reconstruir de forma confiable cuántos días permaneció cada tarjeta en cada columna.

Por ello, esta carencia se registra como un cuello de botella en sí mismo: limita la capacidad del equipo para identificar con precisión dónde se detuvo el trabajo.

**Evidencia:**  
El tablero permite observar el estado actual, pero el equipo no dispone de un registro consolidado de permanencia por columna para los 10 días del Sprint.

---

## 5.2. Validación tardía de la Definition of Done

**Clasificación:** Transferencia entre personas.

### Evidencia

* **PR #4 (Issue #3):** Fue fusionado sin aprobación formal registrada, por lo que el Issue permanece en *In Progress*.
* **PR #13 (Issue #5):** La implementación inicial fue fusionada sin aprobación formal previa, lo que generó retrabajo posterior.
* **PR #14 y PR #15:** Documentan el proceso de reversión y reintegración utilizado por el equipo para corregir la trazabilidad del Issue #5.
* **PR #9 (Issue #8):** Contó con aprobación antes de la integración, pero el elemento continúa fuera de *Done* por otros criterios de la DoD.

### Impacto

Se generó retrabajo para revisar evidencias, corregir la integración del Issue #5 y alinear el estado del tablero con la Definition of Done.

### Decisión del equipo

Para el cierre del Sprint 1, el equipo acordó considerar el **Issue #5** como *Done*, contabilizando sus 3 Story Points, debido a que la implementación final cuenta con:

* Pruebas automatizadas
* CI exitoso
* Quality Gate aprobado
* Documentación
* Revisión por integrantes del equipo

---

### 5.3. Fricción en herramientas de CI/CD

**Clasificación:** Fricción de herramientas.

Los errores y ajustes de SonarCloud requirieron varias correcciones durante el Sprint.

**Evidencia:**

- Issue #8 relacionado con el escáner de SonarCloud.
- Ajustes posteriores del workflow.
- Ejecuciones de Quality Gate durante la implementación del Issue #5.

**Impacto:**  
Tiempo adicional dedicado a corregir configuración antes de obtener un pipeline estable.

---

## 6. Aspectos positivos del Sprint

- Se logró completar el Issue #5 y dejarlo trazado mediante Pull Requests.
- Se incorporaron pruebas automatizadas al flujo de CI.
- SonarCloud alcanzó Quality Gate `Passed` para la implementación final del Issue #5.
- El equipo identificó que un PR fusionado no equivale automáticamente a trabajo terminado.
- Se actualizó el catálogo de deuda técnica con tres hallazgos priorizados y responsables.
- El tablero permite distinguir claramente trabajo pendiente, en progreso y terminado.

---

## 7. Aspectos a mejorar

- Verificar DoR antes de iniciar cada elemento.
- Verificar DoD antes del merge y antes de mover una tarjeta a `Done`.
- Mantener historial de tiempos de permanencia en las columnas del tablero.
- Validar cambios de CI/CD mediante revisión previa.
- Mantener las fechas y métricas consistentes en todos los artefactos del Sprint.
- Evitar corregir de forma retrospectiva evidencias que debieron existir antes de la integración.

---

## 8. Conclusión de la Sprint Retrospective

La Sprint Retrospective del Sprint 1 mostró que las principales dificultades del equipo no estuvieron únicamente relacionadas con la implementación del software, sino con la preparación, trazabilidad y verificación del trabajo.

El equipo terminó el Sprint con una velocidad de **3 Story Points**, pero varios elementos con trabajo realizado permanecieron fuera de `Done` debido a la necesidad de cumplir criterios adicionales de proceso.

Las observaciones de los cuatro integrantes muestran tres áreas principales de mejora:

1. Aplicación consistente de DoR y DoD.
2. Estabilidad y revisión de herramientas de CI/CD.
3. Mejor registro de los tiempos de espera del tablero.

Estas observaciones serán utilizadas como origen del **Plan de Mejora de Proceso de la Semana 7**, donde cada acción deberá contar con responsable, momento de entrada e indicador verificable.

---

## 9. Evidencias relacionadas

- PR #4 - Issue #3.
- PR #9 - Issue #8.
- PR #14 - Revert temporal de Issue #5.
- PR #15 - Reintegración del Issue #5.
- GitHub Project B-5.
- Reporte de velocidad de cierre del Sprint 1.
- Catálogo de deuda técnica actualizado.
- Acta de retrospectiva de medio Sprint 1.

## Evidencia en Miro

La Sprint Retrospective fue realizada en Miro con una observación por integrante.

- Tablero de Miro: [Tablero de miro](https://miro.com/app/board/uXjVHgfOMEE=/)
- Exportación: `docs/proceso/evidencias/Sprint_Retrospective_Miro_Sprint1.pdf`