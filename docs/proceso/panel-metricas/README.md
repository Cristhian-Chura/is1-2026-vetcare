# Panel de Métricas de Proceso: Semana 4

## 1. Indicadores Computables (Definición Adaptada)

| Indicador | Métrica Obtenida | Estimador | Ventana Temporal | Tamaño de Muestra | Responsable |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Tiempo de entrega de cambios | 0.7 horas | Mediana | 2 semanas | N = 2 pull requests | Alexis Condori |
| Frecuencia de integración | 1 fusión/semana | Tasa semanal | 2 semanas | N = 2 pull requests | Alexis Condori |

**Detalle del cálculo (tiempo de entrega, por PR):**

| Pull Request | Primer commit (author.date) | Merge (merged_at) | Tiempo transcurrido |
| :--- | :--- | :--- | :--- |
| PR #1 | 2026-09-02T14:12:00Z | 2026-09-02T14:54:51Z | 0.7 horas |
| PR #4 | 2026-09-09T03:30:00Z | 2026-09-09T04:16:53Z | 0.8 horas |

## 2. Declaración de Indicadores Pendientes

* **Frecuencia de despliegue:** Pendiente por ausencia de entorno de producción y pipeline de CI/CD. Se activará en la Semana 16 con la puesta en marcha del pipeline de despliegue continuo [Silabo_IS1_2026.md, S16].
* **Tasa de fallos de cambio:** Pendiente por ausencia de telemetría y registro de incidentes en producción. Se activará en la Semana 16 [Silabo_IS1_2026.md, S16].
* **Tiempo de restauración del servicio:** Pendiente por ausencia de ambiente productivo con monitoreo activo. Se activará en la Semana 16 [Silabo_IS1_2026.md, S16].

## 3. Trazabilidad y Datos Crudos

* Fecha de extracción: 2026-09-16
* Fuente: GitHub API REST, `/repos/Cristhian-Chura/is1-2026-vetcare/pulls?state=closed`
* Archivo de datos crudos: `metricas_raw.json` (en esta misma carpeta)
* Enlace a confirmación (commit): [pendiente — agregar hash tras el commit]
