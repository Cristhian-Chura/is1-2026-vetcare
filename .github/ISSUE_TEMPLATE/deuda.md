---
name: Registro de Deuda (Técnica o de Especificación)
about: Plantilla para registrar hallazgos de deuda técnica (SonarCloud) o deudas de especificación heredadas/sprint
title: 'deuda: [Descripción corta del hallazgo o ambigüedad]'
labels: 'deuda'
assignees: ''
---

## 📍 Dónde (Ubicación exacta)
- **Ruta exacta en OpenAPI / SAD / Código**: [Ej. `paths > /pagos > post > responses > 409` o `src/controllers/CitaController.js`]

## 🛠️ Qué falta / Problema detectado
- **Descripción**: [Detalla la decisión que no se puede tomar o el código/diseño a refactorizar]

## 🏛️ Origen de la Deuda
- [ ] **Heredada**: Proviene del paquete heredado de Diseño de Sistemas (SAD v1.0 / OpenAPI v3.2.0).
- [ ] **Sprint 1**: Generada o descubierta durante la ejecución del Sprint 1.
- [ ] **SonarCloud**: Identificada por el analizador estático (Tamaño / Complejidad / Violación).

## ⚠️ Severidad
- [ ] **Alta** (Bloquea arquitectura o seguridad, ej. `DEUDA-014` o credencial expuesta)
- [ ] **Media** (Dificulta mantenibilidad o cobertura de pruebas)
- [ ] **Baja** (Ajuste menor de estilo o formato)

## 👤 Responsable asignado
- **Responsable**: [Nombre del integrante o rol asignado para su remediación]