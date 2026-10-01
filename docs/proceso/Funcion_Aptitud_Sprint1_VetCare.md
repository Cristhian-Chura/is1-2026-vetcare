# Función de Aptitud Declarada - Sprint 1

**Proyecto:** Sistema de gestión de clínica veterinaria - VetCare  
**Curso:** Ingeniería de Software I (IS1-2026)  
**Equipo:** B-5  
**Sprint:** Sprint 1  
**Semana:** 7  

---

## 1. Nombre

**Seguridad y calidad del pipeline de integración continua**

---

## 2. Hallazgo que protege

La función de aptitud se declara sobre el primer hallazgo del catálogo de deuda técnica actualizado:

`Use full commit SHA hash for this dependency`

Este hallazgo está relacionado con la configuración del workflow de GitHub Actions / SonarCloud y con la necesidad de mantener un pipeline seguro, trazable y verificable.

---

## 3. Qué mide

La función de aptitud medirá los siguientes aspectos:

- Estado del Quality Gate de SonarCloud.
- Security Rating del código nuevo.
- cobertura del código nuevo.
- Ausencia de nuevos Security Hotspots.
- Uso de dependencias de GitHub Actions fijadas mediante referencias verificables.

---

## 4. Umbrales

La función se considerará cumplida cuando se satisfagan los siguientes umbrales:

- `Quality Gate = Passed`
- `Security Rating on New Code = A`
- `Coverage on New Code >= 80 %`
- `Security Hotspots on New Code = 0`
- las acciones críticas del workflow utilicen referencias fijadas de forma segura.

---

## 5. Condición de incumplimiento

Si alguno de los umbrales anteriores no se cumple, el Pull Request no deberá considerarse listo para integración.

---

## 6. Evidencia actual

Durante la implementación y reintegración del Issue #5 mediante el PR #15, SonarCloud reportó:

- Quality Gate: `Passed`
- Coverage on New Code: `91.7 %`
- Security Hotspots on New Code: `0`
- Duplication on New Code: `0.0 %`

Estos resultados sirven como evidencia técnica de referencia para la función declarada.

---

## 7. Semana de automatización

La función de aptitud se automatizará formalmente durante las **Semanas 15 y 16**, de acuerdo con la secuencia de trabajo indicada en la guía del curso.

---

## 8. Estado

**Declarada, no implementada todavía como función de aptitud formal.**

En la Semana 7 únicamente se define su propósito, métricas, umbrales, hallazgo protegido y momento de automatización.
