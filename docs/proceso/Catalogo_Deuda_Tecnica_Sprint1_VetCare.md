# Catálogo de Deuda Técnica Priorizado – Sprint 1

**Proyecto:** Sistema de gestión de clínica veterinaria - VetCare  
**Curso:** Ingeniería de Software I (IS1-2026)  
**Equipo:** B-5  
**Sprint:** Sprint 1  
**Responsable del análisis:** Alexis Erik Ricardo Condori Rivera  

## 1. Objetivo

Identificar y priorizar la deuda técnica heredada correspondiente al código proveniente de Diseño de Sistemas y a la rebanada vertical de la Semana 2, considerando únicamente hallazgos de severidad Alta y Media obtenidos mediante SonarCloud.

## 2. Resultado del análisis

Tras ejecutar el análisis en SonarCloud y aplicar los filtros de severidad Alta y Media, no se encontraron hallazgos retenidos correspondientes a deuda técnica heredada.

El único hallazgo de severidad Alta detectado fue:

- **Hallazgo:** `Use full commit SHA hash for this dependency`
- **Severidad:** Alta
- **Esfuerzo estimado:** 30 minutos
- **Archivo:** `.github/workflows/sonarcloud.yml`

Este hallazgo no fue incluido en el catálogo de deuda técnica heredada, debido a que el archivo `.github/workflows/sonarcloud.yml` fue creado durante el Sprint 1 y no forma parte del código heredado analizado.

## 3. Catálogo priorizado

| Prioridad | Hallazgo | Severidad | Tipo | Esfuerzo estimado | Responsable | Estado |
|---|---|---|---|---|---|---|
| — | No se encontraron hallazgos retenidos de severidad Alta o Media en la deuda técnica heredada | — | — | — | — | Sin hallazgos retenidos |

## 4. Conclusión

El análisis de SonarCloud no identificó deuda técnica heredada de severidad Alta o Media que deba ser retenida y priorizada en el Sprint 1.

Por lo tanto, el catálogo de deuda técnica heredada se reporta con **0 hallazgos retenidos**.
