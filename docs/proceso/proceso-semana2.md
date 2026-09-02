# Expediente de Proceso — Semana 2 (IS1-2026)
## Sistema: VetCare — Gestión Clínica Veterinaria

---

## 1. Identificación del paquete heredado: 

Este SAD va documentar **VetCare**, un sistema de gestión clínica veterinaria que va resolver el problema de negocio al momento de coordinar el agendamiento de citas, el cobro asociado y el registro del historial clínico de una mascota en un solo flujo, de esta manera evitando que los clientes, recepcionistas y veterinarios dependan de canales manuales como llamadas, cuadernos, Whatsapp, entre otros, para saber si hay 

un horario disponible o si la atención quedó registrada correctamente. 

1. Ficha de rebanada candidata: 

 **Tabla 01** 

_Ficha de especificaciones_ 

|Campo|Valor|
|---|---|
|Verbo HTTP|POST|
|Ruta|/api/v1/citas|
|OperationId (Contrato)|crearCita|
|Capas involucradas|Controlador<br>(CitasController)<br>→<br>Fachada<br>(CitasFacade,ADR-002)<br>→<br>Servicios<br>dedominio<br>(AvailabilityService , PetService) →<br>Repositorio (CitaRepositoryEnMemoria<br>, ADR-003)|
|Persistencia|En<br>memoria<br>para<br>esta<br>rebanada<br>(permitido por la FAQ de la guía<br>mientras no haya  MySQL configurado);<br>la interfaz del repositorio ya desacopla<br>el dominio de la tecnología, asi que<br>migrar a MySQL más adelante no<br>debería tocar CitaFacade.|
|Prueba de integracion propuesta|Peticion HTTP real via supertest  a<br>POS/api/v1/citas: caso feliz (201 +<br>estado confirmada), campo obligatorio<br>faltante(400),<br>horario<br>no|


||disponible(400).||
|---|---|---|
|Requisito relacionado|RF-001 (Agendar cita)||
|ADRs aplicados|ADR-001<br>(monolito|modular),|
||ADR-002<br>(Facade),|ADR-003|
||(Repository)||

---

## 2. Mapeo de Áreas de Conocimiento SWEBOK 

 **Tabla 02** 

_SWEBOK en VetCare_ 

|**Área SWEBOK**|**Tarea real del equipo en VetCare**|
|---|---|
|Requisitos de Software|Auditoria del contrato OpenAPI v3.2.0<br>consolidado<br>(path/citas,<br>/atenciones)<br>frente a la matriz de trazabilidad<br>RF-001–RF-008|
|Diseño de Software|Vistas<br>C4<br>(L1<br>contexto,<br>L2<br>contenedores, L3 componentes) del<br>SAD heredado; diseño táctico Facade +<br>State para el ciclo de vida de Cita|
|Construcción de Software|Implementación modular de la rebanada<br>POST /citas: CitaController, CitaFacade,<br>AvailabilityService,<br>PetService,<br>CitaRepositoryEnMemoria|
|Pruebas de Software|Suite<br>de<br>integración<br>HTTP<br>(citas.integration.test.js) que valida el<br>corte de extremo a extremo, no solo<br>unidades aisladas|
|Gestión de Configuración|Rama feature/rebanada-inicial, commits<br>convencionales (feat(citas): ...), tag<br>v0.2.0-vertical-slice tras el merge|

---

## 3. Justificación del Ciclo de Vida Adaptado 

- **Modelo elegido:** Scrum/Ágil con entregas incrementales por rebanada 

vertical. 

   - **Por qué no Cascada:** El alcance de VetCare (citas, historial, notificaciones, pagos) no está completamente congelado — el propio ADR-002 documenta que se evaluaron y descartaron alternativas de diseño en pleno desarrollo (Mediator vs. Facade), lo cual solo es viable si el ciclo de vida tolera ese refinamiento sin reiniciar fases. 

   - **Por qué no Iterativo puro:** El riesgo operativo del modelo Iterativo es el retrabajo sin fin; el equipo lo mitiga acotando cada sprint a una rebanada vertical con criterios de aceptación cerrados (los 4 del laboratorio: fidelidad al contrato, corte arquitectónico completo, prueba ejecutable, disciplina de Git), en vez de iterar indefinidamente sobre el mismo componente. 

   - **Cadencia de sprints:** Sprints cortos (una rebanada vertical por sesión de laboratorio), con Definición de Terminado explícita como puerta de calidad entre sprints. 

---

## 4. Definición de terminado (DoD) 

Consideramos un incremento cuando: 

- El endpoint coincide igual a el contrato OpenAPI (ruta, verbo, esquema de request/response). 

- La petición atraviesa controlador ⇒ lógica de negocio ⇒ persistencia (o mock estructurado), sin saltarse capas. 

- Existe al menos una prueba de integración automatizada y ejecutable que pasa en verde 

- El cambio vive en una rama _feature_ /, fue revisado por Pull Request y se fusionó con un commit convencional que referencia la tarea. 

- Cualquier ambigüedad del contrato quedó registrada como deuda de especificación, no resuelta por suposición silenciosa. 

---

## 5. Registro de deuda de especificación 

**Issue:** deuda-especificación: estado de Cita tras DELETE /citas/{citaId} 

1. Dónde: paths > /citas/{citaId} > delete > responses > 200 > content > application/json > schema — el contrato solo declara type: object vacío. 

2. Qué falta: el contrato no dice si la respuesta debe confirmar el nuevo estado (cancelada) de la cita ni devolver el recurso actualizado. El cliente no puede saber, solo por el contrato, si la cancelación fue lógica o física, ni qué mostrar tras cancelar. 

3. A quien se le pregunta: Al responsable del grupo a cargo del contrato OpenAPI 

4. Qué se asume mientras tanto: la cancelación es lógica (cambio de estado a cancelada, consistente con ADR-003) y la respuesta 200 devuelve el objeto CitaResponse actualizado, no un objeto vacío. Esto permite seguir construyendo sin bloquear el sprint. 

---

## 6. Enlace Documento - Formato Docs original
- https://docs.google.com/document/d/1bGJf7DgLy7K-QrMfWbPmOIZ9l_ByuEULTqf9QyIvy1E/edit?usp=sharing