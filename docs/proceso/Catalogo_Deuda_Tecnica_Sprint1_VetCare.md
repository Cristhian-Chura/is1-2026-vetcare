# Catálogo de Deuda Técnica Priorizado – Sprint 1

**Proyecto:** Sistema de gestión de clínica veterinaria - VetCare  
**Curso:** Ingeniería de Software I (IS1-2026)  
**Equipo:** B-5  
**Sprint:** Sprint 1  
**Responsable del análisis:** Alexis Erik Ricardo Condori Rivera

**Nota de actualización (29/09/2026):** El reporte inicial de la Semana 6 declaró 0 hallazgos retenidos en el catálogo principal al excluirse la alerta del workflow (por ser generada durante el sprint) y al no haberse documentado aún la deuda de diseño. Para cumplir con los criterios de la Semana 7 y reflejar la deuda real del equipo, se actualiza este documento reincorporando la alerta técnica e incluyendo la deuda de especificación.

## 1. Objetivo

Identificar y priorizar la deuda técnica heredada correspondiente al código proveniente de Diseño de Sistemas y a la rebanada vertical de la Semana 2, considerando únicamente hallazgos de severidad Alta y Media obtenidos mediante SonarCloud.

## 2. Resultado del análisis

Tras consolidar los resultados de la inspección automática y la revisión del equipo, se registraron tres elementos de deuda.

**Aclaración de orígenes:** 
Es imperativo señalar que **únicamente el hallazgo 1 proviene de SonarCloud**. Los hallazgos 2 y 3 no son hallazgos de código, sino que corresponden estrictamente a **deuda de especificación**.

1. **Análisis de SonarCloud:** Se detectó la alerta de severidad Alta `Use full commit SHA hash for this dependency` en el archivo `.github/workflows/sonarcloud.yml`. Se declara como deuda del Sprint 1, no heredada.
2. **Revisión del Sprint:** Se identificó deuda de especificación correspondiente al Issue #2 (estado de Cita tras ejecución de método DELETE). Se declara como deuda del propio sprint.
3. **Revisión de Especificación Heredada:** Se identificó deuda de diseño y especificación abierta respecto al endpoint `POST /pagos` proveniente del proyecto heredado.

## 3. Catálogo priorizado

A continuación, se presentan los hallazgos retenidos con sus respectivos responsables, esfuerzo de remediación estimado y estado actual, alineados con el tablero de GitHub Projects del equipo.

| # | Identificador | Tipo | Origen (Qué declarar) | Esfuerzo estimado | Responsable | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `Use full commit SHA hash for this dependency` (`sonarcloud.yml`) | Código (Alta) | Análisis de SonarCloud (Deuda del Sprint 1, no heredada) | 30 minutos | Cristian | Pendiente |
| 2 | Issue #2, Deuda-especificación (estado de Cita tras `DELETE`) | Diseño | Su propio sprint (Deuda de especificación, no de código) | 1 hora | Alexis y David | Pendiente |
| 3 | Hallazgo `POST /pagos` | Diseño | Proyecto heredado | 1 hora | Alexis | Cerrado |

## 4. Conclusión

El catálogo se actualiza con **3 hallazgos retenidos** y priorizados, cada uno con su origen claramente delimitado y asignado a un responsable para su gestión en el tablero del equipo. Esto alinea el artefacto con la realidad del desarrollo y con los criterios de gobernanza técnica requeridos para el cierre del ciclo.
