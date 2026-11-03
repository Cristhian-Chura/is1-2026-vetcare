# <img src="https://cdn-icons-png.flaticon.com/512/2809/2809825.png" height="40" align="top"> VetCare
Equipo B-5, Ingeniería de Software I (IS1-2026), UNJBG.

[![Node.js Version](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express Framework](https://img.shields.io/badge/Express-v5.2.1-lightgrey.svg)](https://expressjs.com/)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Cristhian-Chura_is1-2026-vetcare&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Cristhian-Chura_is1-2026-vetcare)

## Qué es
VetCare es una plataforma backend diseñada para centralizar, automatizar y optimizar los procesos operativos y administrativos de una clínica veterinaria.

## Paquete heredado
SAD y contrato OpenAPI adoptados del equipo G6 de Diseño de Sistemas.
Línea base etiquetada como linea-base-heredada.

## Cómo se levanta
1. Ejecutar `npm install`.
2. Iniciar el backend con `npm start`.
3. La API queda disponible por defecto en `http://localhost:3000/api/v1`.

## Uso de endpoints

### Crear una cita
`POST /api/v1/citas`

### Obtener una cita por ID
`GET /api/v1/citas/{citaId}`

- Responde `200` con `CitaResponse` cuando la cita existe.
- Responde `404` con el esquema `Error` cuando la cita no existe.
- Corresponde a `RF-003`, operación `obtenerCita` y caso `TST-05`.

## Pruebas
Ejecutar `npm test`. Las pruebas de integración están en `/test`.

## Integrantes
- Cristian Chura Peralta, 2017-119049, Administrador del repositorio
- Luis David Cruz Llica, 2024-119060, Consolidador de entregables
- Jose Antonio Vilcanqui Chambi, 2024-119017, Coordinador
- Alexis Condori Rivera, 2023-119015, Custodiador del Open API

## Proceso de Desarrollo

Para consultar la navegación detallada por semanas, revisa el [Índice de Proceso](docs/proceso/README.md).

```mermaid
flowchart LR
  A[Product Backlog] -->|filtro DoR| B[Ready]
  B --> C[In Progress]
  C -->|PR + revisión de par| D[In Review]
  D -->|DoD + CI| E[Done]
  E --> F[Burndown y velocidad]
  F --> G[Retrospectiva]
  G --> H[Plan de mejora]
  H --> A