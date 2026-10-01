# Plan de Mejora de Proceso - Sprint 1

**Proyecto:** Sistema de gestión de clínica veterinaria - VetCare  
**Curso:** Ingeniería de Software I (IS1-2026)  
**Equipo:** B-5  
**Sprint:** Sprint 1  
**Fecha de inicio:** 21/09/2026  
**Fecha de cierre:** 02/10/2026  

---

## 1. Objetivo

Definir acciones concretas de mejora a partir de los cuellos de botella y fricciones identificados durante la Sprint Retrospective final del Sprint 1.

Cada acción incluye los cuatro datos exigidos para el cierre de la Semana 7:

1. Cuello de botella o fricción que la origina, con evidencia.
2. Responsable.
3. Momento de entrada.
4. indicador de verificación.

---

## 2. Acción de mejora 1 - Checklist obligatorio de DoR antes de iniciar trabajo

### Origen

Durante el Sprint 1 se identificaron tarjetas con información incompleta al momento de iniciar el trabajo, incluyendo ausencia inicial de Story Points y necesidad de completar referencias de requisito, operación y caso de prueba.

### Evidencia

- Estado inicial del tablero del Sprint 1.
- Observación de Cristian Chura Peralta en la retrospectiva.
- Necesidad de completar la información del Issue #5 antes de su cierre.

### Acción

Antes de incorporar un elemento al Sprint 2, verificar obligatoriamente que contenga:

- Requisito funcional relacionado.
- Endpoint u operación OpenAPI cuando corresponda.
- Caso de prueba asociado.
- Criterios de aceptación.
- Story Points.
- Responsable asignado.

Si alguno de estos datos falta, el elemento no debe comenzar su ejecución.

### Responsable

**Cristian Chura Peralta**

### Momento de entrada

**Sprint 2 - Semana 10**

### Indicador de verificación

**100 % de los Issues comprometidos en Sprint 2 deberán cumplir el checklist de DoR antes de ser movidos a `In Progress`.**

---

## 3. Acción de mejora 2 - Verificación de DoD antes del merge y antes de mover a Done

### Origen

Durante el Sprint 1 se presentaron dificultades para determinar si un elemento podía considerarse terminado solo porque tenía un Pull Request fusionado.

El Issue #3 quedó en `In Progress` pese a contar con PR fusionado, y el Issue #5 requirió trabajo adicional para consolidar sus evidencias de revisión, pruebas, documentación y CI.

### Evidencia

- Issue #3 y PR #4.
- Issue #5 y PR #15.
- Observación de Luis David Cruz Llica en la Sprint Retrospective.
- Revisión de la Definition of Done del equipo.

### Acción

Antes de hacer merge y antes de mover una tarjeta a `Done`, utilizar un checklist visible que confirme:

- Aprobación de al menos otro integrante.
- Evidencia de pruebas automatizadas.
- Checks de CI exitosos.
- Documentación actualizada cuando corresponda.
- Commits con convención acordada y referencia al Issue.
- Trazabilidad entre Issue, PR y commit.

### Responsable

**Luis David Cruz Llica**

### Momento de entrada

**Sprint 2 - Semana 10**

### Indicador de verificación

**100 % de los elementos movidos a `Done` deberán tener evidencia verificable de cada criterio del DoD antes del cambio de estado.**

---

## 4. Acción de mejora 3 - Validación previa de cambios de CI/CD

### Origen

La configuración y corrección de SonarCloud generó errores, bloqueos temporales y retrabajo durante el Sprint 1.

### Evidencia

- Issue #8.
- Pull Request #9.
- Ejecuciones del workflow de GitHub Actions.
- Correcciones realizadas durante la implementación del Issue #5.
- Observación de Alexis Erik Ricardo Condori Rivera.

### Acción

Toda modificación que afecte GitHub Actions, SonarCloud o configuración de CI/CD deberá:

1. Realizarse en una rama separada.
2. Abrirse mediante Pull Request.
3. Ejecutar los checks correspondientes.
4. Ser revisada por al menos otro integrante antes de integrarse a `main`.

### Responsable

**Alexis Erik Ricardo Condori Rivera**

### Momento de entrada

**Sprint 2 - Semana 10**

### Indicador de verificación

**0 cambios de CI/CD integrados directamente a `main` sin Pull Request, checks ejecutados y revisión de otro integrante.**

---

## 5. Acción de mejora 4 - Registro de tiempos de espera en el tablero

### Origen

Durante la Sprint Retrospective final no fue posible reconstruir de forma confiable los días de permanencia de cada tarjeta en cada columna del tablero.

Esta carencia dificultó sustentar los cuellos de botella con datos de espera.

### Evidencia

- Tablero GitHub Projects del Sprint 1.
- Ausencia de un registro consolidado de permanencia por columna.
- Necesidad de estimar los cuellos de botella a partir de eventos y Pull Requests.

### Acción

Registrar los cambios de estado de cada elemento del Sprint 2 de forma consistente y conservar evidencia suficiente para calcular cuánto tiempo permanece una tarjeta en:

- Todo.
- In Progress.
- Done.
- cualquier estado adicional que el equipo incorpore.

Cuando sea posible, utilizar las funciones de historial o Insights de GitHub Projects para respaldar estos datos.

### Responsable

**Jose Antonio Vilcanqui Chambi**

### Momento de entrada

**Sprint 2 - Semana 10**

### Indicador de verificación

**100 % de los Issues del Sprint 2 deberán contar con datos suficientes para calcular sus días de permanencia por estado al finalizar el Sprint.**

---
## 6. Acción de mejora 5 — Gestión segura de credenciales y secretos

### Origen

Durante el Sprint 1 se identificó el uso de una credencial fuera del mecanismo seguro previsto por GitHub, lo que obligó posteriormente a revocarla.

### Evidencia

- Observación de Jose Antonio Vilcanqui Chambi en la Sprint Retrospective.
- Uso y posterior revocación de una credencial compartida fuera de GitHub Secrets.

### Acción

Toda credencial, token o secreto utilizado por el proyecto deberá almacenarse exclusivamente mediante mecanismos seguros como GitHub Secrets.

No se deberán compartir credenciales mediante chat, archivos, commits o canales informales del equipo.

### Responsable

**Jose Antonio Vilcanqui Chambi**

### Momento de entrada

**Sprint 2 — Semana 10**

### Indicador de verificación

**0 credenciales o tokens expuestos en commits, archivos del repositorio o canales informales, y 100 % de los secretos utilizados por CI/CD almacenados mediante GitHub Secrets.**

---

## 7. Resumen del plan

| # | Acción | Responsable | Entrada | Indicador |
|---|---|---|---|---|
| 1 | Checklist obligatorio de DoR | Cristian Chura Peralta | Sprint 2 — Semana 10 | 100 % de Issues cumplen DoR antes de `In Progress` |
| 2 | Checklist de DoD antes de merge y Done | Luis David Cruz Llica | Sprint 2 — Semana 10 | 100 % de elementos en Done con evidencias completas |
| 3 | Validación previa de CI/CD | Alexis Erik Ricardo Condori Rivera | Sprint 2 — Semana 10 | 0 cambios CI/CD directos a `main` sin revisión |
| 4 | Registro de tiempos de espera | Jose Antonio Vilcanqui Chambi | Sprint 2 — Semana 10 | 100 % de Issues con datos de permanencia por estado |
| 5 | Gestión segura de credenciales y secretos | Jose Antonio Vilcanqui Chambi | Sprint 2 — Semana 10 | 0 credenciales expuestas y 100 % de secretos gestionados mediante GitHub Secrets |

---

## 8. Relación con los cuellos de botella

| Cuello de botella / fricción | Acción asociada |
|---|---|
| Preparación incompleta de elementos | Acción 1 |
| Verificación tardía de DoD | Acción 2 |
| Errores y retrabajo en CI/CD | Acción 3 |
| Falta de historial para medir espera | Acción 4 |
| Manejo inseguro de credenciales | Acción 5 |

---

## 9. Resultado esperado

La aplicación de estas acciones busca que el Sprint 2 tenga:

- Menos retrabajo al cerrar elementos.
- Mejor preparación antes de iniciar tareas.
- Menor riesgo al modificar CI/CD.
- Trazabilidad clara entre Issue, PR, commits y evidencias.
- Datos suficientes para medir tiempos de espera y detectar cuellos de botella de forma objetiva.

---

## 10. Seguimiento

El cumplimiento de las acciones deberá revisarse al final del Sprint 2 y durante la auditoría de la Semana 8 cuando corresponda.

Las acciones no se considerarán cumplidas por intención o declaración, sino por los indicadores definidos en este documento.
