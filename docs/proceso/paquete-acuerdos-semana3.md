# **Paquete de acuerdos del equipo VetCare** 

- **Curso:** Ingeniería de Software I (IS1-2026) Código IIS 19.06432 

- **Semana 3:** Laboratorio dual: acuerdos de equipo, DoD y DoR 

- **Proyecto base:** Sistema de gestión de clínica veterinaria (VetCare) 

- **Repositorio:** https://github.com/Cristhian-Chura/is1-2026-vetcare 

# **0. Integrantes** 

- Jose Antonio Vilcanqui Chambi 

- Cristian Chura Peralta 

- Luis David Cruz Llica 

- Alexis Erik Ricardo Condori Rivera 

# **1. Acuerdos de equipo** 

- **Disponibilidad:** cada integrante declara en el tablero de GitHub Projects su franja horaria semanal de trabajo antes del inicio del sprint. 

- **Revisión:** todo pull request recibe su primer comentario de revisión dentro de las 24 horas siguientes a su apertura. 

- **Integración:** ninguna rama de trabajo permanece sin integrarse a main más de tres días calendario. 

- **Respuesta:** toda mención directa (@usuario) en un issue o pull request del repositorio se responde dentro de 24 horas hábiles. 

# **2. Definición de Terminado (DoD)** 

|#|Criterio|Evidencia que lo comprueba|
|---|---|---|
|1|Ningún cambio se integra a<br>main sin la aprobación de un<br>integrante distinto del autor|Historial de aprobaciones del<br>pull request|
|2|Todo elemento cerrado suma<br>al menos una prueba<br>automatizada que falla si se<br>revierte el cambio|Salida de la ejecución de<br>pruebas (CI)|
|3|Ningún pull request supera|Fecha de apertura y fecha|



|#|Criterio|Evidencia que lo comprueba|
|---|---|---|
||24 horas sin su primer<br>comentario de revisión|del primer comentario|
|4|Ninguna rama de trabajo<br>supera tres días calendario<br>sin integrarse|Historia del repositorio|
|5|Todo mensaje de commit<br>sigue la convención<br>acordada (tipo(alcance):<br>descripción) y referencia el<br>número de issue|Historia del repositorio|
|6|Cada función pública del<br>backend (Node.js/Express)<br>tiene un comentario que<br>describe su propósito|Salida del analizador de<br>estilo|
|7|Toda funcionalidad nueva<br>sobre un endpoint actualiza<br>la sección de uso del<br>README en el mismo pull<br>request|Diferencia del archivo en el<br>pull request|



# **3. Definición de Preparado (DoR)** 

- El elemento declara su criterio de aceptación antes de entrar al sprint. 

- El elemento referencia el requisito funcional (RF-00X) de la matriz de trazabilidad al que corresponde. 

- El elemento indica el endpoint u operación del contrato OpenAPI que afecta, si aplica. 

- **Deuda de especificación:** ningún elemento entra al sprint si su deuda no declara destinatario y supuesto asumido, registrados en el tablero. 

# **4. Declaración de fuente** 

La Definición de Terminado proviene de la Guía de Scrum (Schwaber y Sutherland, 2020). Los acuerdos de equipo y la Definición de Preparado son decisión de este equipo y no figuran en esa fuente. 

# **5. Vigencia** 

# **Fecha de acuerdo:** 08/09/2026 

**Suscriben:** cuatro integrantes (Vilcanqui Chambi, Chura Peralta, Cruz Llica, Condori Rivera) **Próxima revisión:** 06/10/2026 

# **6. Prueba retroactiva (Fase 4)** 

Aplicación del DoD anterior a la rebanada vertical integrada en la Semana 2 (POST /citas crearCita, RF-001): 

|Criterio del DoD|¿La rebanada de la Semana<br>2 lo cumple?|Observación|
|---|---|---|
|1. Aprobación de un<br>integrante distinto del autor|No cumple|El panel del PR #1 muestra<br>"Reviewers: No reviews".<br>Jose-An608 fusionó el PR de<br>Cristhian-Chura sin que<br>quedara registrada ninguna<br>aprobación formal.|
|2. Al menos una prueba<br>automatizada|Parcial / no cumple como<br>está evidenciado|El archivo<br>test/citas.integration.test.js<br>existe en el repo con 3<br>casos, pero el PR muestra<br>"Checks: 0" no hay CI<br>configurado que los ejecute<br>automáticamente, así que no<br>hay "salida de ejecución de<br>pruebas" que sirva de<br>evidencia sobre el propio PR.|
|3. Primer comentario de<br>revisión en 24h|No aplica / no cumple|El único comentario es la<br>descripción del propio autor<br>(Cristhian-Chura, marcado<br>"Owner"); no hubo un revisor<br>que comentara, por lo que el<br>criterio no tiene nada que<br>medir.|
|4. Integración en ≤3 días|Sí|Primer commit de la rama:<br>02/09/2026 09:12<br>Merge (PR #1): 02/09/2026<br>09:54 → ~42 minutos.|
|5. Convención de commits|Parcial|feat(citas): implementa|



|Criterio del DoD|¿La rebanada de la Semana<br>2 lo cumple?|Observación|
|---|---|---|
|con número de issue||endpoint POST /citas segun<br>openapi (#RF-001) sigue la<br>convención tipo(alcance):<br>descripción, pero #RF-001<br>es el requisito, no un número<br>de issue de GitHub válido<br>para autolink.|
|6. Comentario de propósito<br>en funciones públicas|Sí|CitaController.js,<br>CitaFacade.js,<br>AvailabilityService.js y<br>PetService.js tienen<br>comentario de propósito al<br>inicio del módulo.|
|7. README actualizado en<br>el mismo PR|Sí|src/README.md se modificó<br>(22 líneas) dentro del mismo<br>PR #1.|



**Conclusión de la prueba retroactiva:** el DoD SÍ rechaza esta rebanada en los criterios 1, 2 y 3, todos ligados al proceso de revisión, no al código en sí. El equipo tiene disciplina de commits, comentarios de propósito y README, pero el PR se fusionó sin pasar por revisión de pares y sin que el proyecto tenga CI configurado para correr las pruebas automáticamente. Esa es exactamente la clase de hallazgo que la guía busca en la Fase 4: "cinco criterios que rechazan trabajo puntúan por encima de doce que no rechazan ninguno." 

# **7. Elemento detenido en la puerta de entrada (Fase 5)** 

Estado actual (verificado en el tablero B-5): el tablero solo contiene el issue #2 (deuda de especificación de la Semana 2), que ya cumple el DoR. Todavía no se ha cargado el conjunto de trabajo de la Semana 4. 

# **Tarea pendiente realizada (bloqueo en el tablero B-5):** 

- **Elemento:** Issue: Implementar endpoint GET /citas/{citaId} 

- **Criterio del DoR que incumple:** El elemento no referencia el requisito funcional (RF-00X) de la matriz de trazabilidad al que corresponde. 

- **Acción:** Permanece fuera del sprint (en la columna "Todo") hasta que cumpla la condición faltante (declarar el RF).

