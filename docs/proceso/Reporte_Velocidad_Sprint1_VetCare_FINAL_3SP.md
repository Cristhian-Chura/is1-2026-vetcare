# Burndown y Reporte de Velocidad — Sprint 1 (cierre)

**IS1-2026 · Equipo B-5 · Semana 7**

> **Nota de fuentes:** el burndown y la fórmula de velocidad son procedimiento del curso. Para la velocidad de cierre se contabilizan únicamente los elementos que el equipo considera terminados conforme a su Definition of Done (DoD) y al estado final del tablero.

---

## 1. Reporte de velocidad de cierre

| Campo | Valor |
| :---- | :---- |
| Fecha de inicio del sprint | 21 de septiembre de 2026 |
| Duración del sprint | Dos semanas (10 días hábiles) |
| Fecha de cierre | 02 de octubre de 2026 |
| Medición | **Cierre del Sprint 1 — Semana 7** |
| Puntos totales planificados | **10 SP** |
| Puntos cerrados | **3 SP** |
| Puntos pendientes | **7 SP** |
| Velocidad de cierre | **3 SP** |
| Porcentaje completado | **30 %** |

### Cálculo

Los elementos estimados del Sprint 1 fueron:

- Issue #2: 2 SP
- Issue #3: 2 SP
- Issue #5: 3 SP
- Issue #8: 3 SP

Total planificado:

`2 + 2 + 3 + 3 = 10 SP`

Al cierre, el Issue #5 se encuentra en `Done` con 3 SP:

`Velocidad de cierre = 3 SP`

Porcentaje completado:

`3 / 10 × 100 = 30 %`

Puntos pendientes:

`10 - 3 = 7 SP`

---

## 2. Estado final de los elementos del Sprint 1

| Ítem | Descripción | Puntos | Estado final | ¿Se contabiliza? |
| :---- | :---- | :----: | :---- | :----: |
| #2 | Deuda-especificación: estado de Cita tras DELETE `/citas/{citaId}` | 2 | Todo | No |
| #3 | Publicar acuerdos de la Semana 3 y corregir OpenAPI | 2 | In Progress | No |
| #5 | Implementar endpoint GET `/citas/{citaId}` | 3 | **Done** | **Sí** |
| #8 | Resolver exit code 3 en el escáner de SonarCloud | 3 | In Progress | No |
| #10 | Publicar burndown, reporte de velocidad y artefactos de proceso S6 | — | In Progress | No suma SP |

---

## 3. Evidencia de cierre del Issue #5

El Issue #5 fue implementado y reintegrado mediante el **PR #15**:

`fix(citas): reintegra GET /citas/{citaId} cumpliendo DoD (#5)`

### Evidencia técnica

- PR #15 mergeado a `main`.
- GitHub Actions `Build`: **success**.
- SonarCloud Quality Gate: **Passed**.
- Coverage on New Code: **91.7 %**.
- Security Hotspots on New Code: **0**.
- Duplication on New Code: **0.0 %**.
- Pruebas automatizadas para:
  - GET existente → `200`.
  - GET inexistente → `404`.
- README actualizado.
- Commit referenciando el Issue #5.
- Revisión de otro integrante registrada en el PR.

### Decisión de cierre

Para efectos del cierre del Sprint 1, el equipo considera el Issue #5 como terminado y lo mantiene en la columna `Done` del tablero, por lo que sus **3 Story Points** se contabilizan en la velocidad de cierre.

---

## 4. Situación del Issue #3

El Issue #3 cuenta con el PR #4 fusionado, pero permanece en `In Progress` porque el equipo no considera que exista evidencia suficiente para cumplir la Definition of Done completa.

Por ello, sus **2 SP no se contabilizan**.

---

## 5. Situación del Issue #8

El Issue #8 cuenta con el PR #9 asociado, pero permanece en `In Progress` y no se contabiliza en la velocidad de cierre.

Sus **3 SP quedan pendientes**.

---

## 6. Burndown final del Sprint 1

La plantilla de Semana 6 utilizó un Sprint de 10 días hábiles y 10 Story Points iniciales.

| Día del sprint | Línea ideal | Avance real (SP pendientes) |
| :----: | :----: | :----: |
| 0 | 10 | 10 |
| 1 | 9 | 10 |
| 2 | 8 | 10 |
| 3 | 7 | 10 |
| 4 | 6 | 10 |
| 5 | 5 | 7 |
| 6 | 4 | N/D |
| 7 | 3 | N/D |
| 8 | 2 | N/D |
| 9 | 1 | N/D |
| 10 — Cierre | 0 | **7** |

**N/D:** no se dispone de un dato diario confirmado para ese día; no se reemplaza por una proyección.

### Interpretación

El Sprint inició con 10 SP pendientes. Al cierre, 3 SP fueron terminados y 7 SP quedaron pendientes.

La velocidad de cierre del Sprint 1 fue de **3 SP**, equivalente al **30 %** de los Story Points planificados.

---

## 7. Comparación: medio sprint vs. cierre

| Métrica | Semana 6 — medio sprint | Semana 7 — cierre |
| :---- | :----: | :----: |
| SP planificados | 10 | 10 |
| SP cerrados | 3 | 3 |
| SP pendientes | 7 | 7 |
| Tipo de medición | Parcial | **Cierre** |
| Estado del Sprint | En curso | **Cerrado** |

---

## 8. Conclusión

El Sprint 1 del equipo B-5 cerró con **3 Story Points completados de 10 planificados**, equivalente al **30 %** del alcance estimado.

El Issue #5 fue el único elemento ubicado en `Done` al cierre del tablero. Los Issues #2, #3 y #8 permanecen fuera de `Done` y no se contabilizan en la velocidad.

La revisión del Sprint mostró que la principal dificultad no fue únicamente técnica, sino también de proceso: varios elementos contaban con trabajo realizado, pero no alcanzaron el estado de cierre requerido por el equipo.

Esta situación se utilizará como evidencia en la Sprint Retrospective y en el plan de mejora de proceso del Sprint 2.

---

## 9. Enlaces de evidencia

- **Repositorio:** https://github.com/Cristhian-Chura/is1-2026-vetcare
- **Issue #5:** https://github.com/Cristhian-Chura/is1-2026-vetcare/issues/5
- **PR #15:** https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/15
- **PR #4:** https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/4
- **PR #9:** https://github.com/Cristhian-Chura/is1-2026-vetcare/pull/9
