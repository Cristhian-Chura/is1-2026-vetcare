---
name: Historia de Usuario / Tarea de Desarrollo
about: Plantilla obligatoria para crear elementos de trabajo que deben cumplir la Definición de Preparado (DoR)
title: 'feat: [Descripción corta de la funcionalidad]'
labels: 'funcionalidad'
assignees: ''
---

## 📋 Criterio de Aceptación
[Describe claramente qué comportamiento o resultado debe cumplir esta historia para darse por aceptada]

## 🔗 Requisito Funcional (Matriz de Trazabilidad SAD)
- **Requisito**: [Ej. RF-001 Agendar cita / RF-002 Cancelar cita / RF-006 Registrar atención / RF-008 Procesar pago]

## 🌐 Operación u Endpoint OpenAPI Afectado
- **Endpoint**: [Ej. `POST /citas`, `DELETE /citas/{citaId}`, `POST /atenciones`, `POST /pagos`]
- **OperationId**: [Ej. `crearCita`, `cancelarCita`, `registrarAtencion`, `procesarPago`]

## 📊 Estimación (Story Points)
- **Story Points**: [Ej. 1, 2, 3 o 5 SP]

## ❓ Deuda de Especificación (Filtro DoR obligatorio)
*Nota: Ningún elemento entra al sprint si su deuda de especificación no declara destinatario y supuesto asumido.*
- **¿Tiene deuda de especificación asociada?**: [ ] Sí / [ ] No
- **Ruta exacta en OpenAPI / SAD**: [Ej. `components > schemas > ...` o `paths > /citas > post > responses > 409`]
- **Destinatario**: [A quién se le pregunta, ej. Autor del SAD / Docente]
- **Supuesto provisional**: [Qué se asume mientras tanto para no detener la construcción]