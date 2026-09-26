# Acta de Retrospectiva de Medio Sprint 1

**Proyecto:** Sistema de gestión de clínica veterinaria - VetCare  
**Curso:** Ingeniería de Software I (IS1-2026)  
**Equipo:** B-5  
**Sprint:** Sprint 1  
**Fecha de retrospectiva:** 25/09/2026  

## 1. Objetivo

Registrar las principales fricciones identificadas por los integrantes del equipo durante la primera mitad del Sprint 1, clasificarlas según el elemento afectado y definir acciones concretas de mejora que permitan reducir problemas similares durante la segunda mitad del Sprint 1 y los siguientes sprints.

---

## 2. Fricciones identificadas

### 2.1. Fricción de Alexis Erik Ricardo Condori Rivera

**Fecha:** 23/09/2026  

**Evento observado:**  
Durante la implementación del workflow de SonarQube/SonarCloud en GitHub Actions se presentaron errores de configuración y alertas que bloquearon temporalmente la ejecución del análisis y retrasaron la extracción de datos para el catálogo de deuda técnica.

**Categoría:** Herramientas  

**Evidencia:**  
Ejecuciones fallidas del workflow de GitHub Actions / SonarCloud durante la configuración del análisis.

**Acción de mejora propuesta:**  
Realizar la configuración de herramientas de integración continua mediante programación en pares (pair programming) o probar los cambios en una rama paralela antes de afectar el flujo principal.

---

### 2.2. Fricción de Jose Antonio Vilcanqui Chambi

**Fecha:** 23/09/2026  

**Evento observado:**  
Durante la configuración del flujo de integración continua, se compartió una credencial de acceso directamente mediante el chat del equipo en lugar de utilizar el mecanismo seguro de GitHub Secrets. La credencial tuvo que ser revocada posteriormente.

**Categoría:** Procesos  

**Evidencia:**  
Comunicación del equipo relacionada con el uso y posterior revocación de la credencial.

**Acción de mejora propuesta:**  
Utilizar exclusivamente GitHub Secrets u otros mecanismos seguros del repositorio para almacenar y utilizar credenciales, evitando compartir tokens o claves directamente mediante canales de comunicación del equipo.

---

### 2.3. Fricción de Luis David Cruz Llica

**Fecha:** 25/09/2026  

**Evento observado:**  
Durante la consolidación del tablero del Sprint 1 surgió dificultad para determinar si un elemento debía considerarse terminado. El Issue #3 tenía su Pull Request fusionado, pero al contrastarlo con la Definición de Terminado del equipo se observó que también era necesario verificar evidencias de revisión, pruebas automatizadas y los demás criterios definidos en el DoD.

Esta situación generó retrabajo al actualizar el estado del tablero y al revisar los datos utilizados para calcular la velocidad parcial.

**Categoría:** Definición de Terminado  

**Evidencia:**  
Issue #3, Pull Request #4 y revisión de la Definición de Terminado (DoD) acordada por el equipo.

**Acción de mejora propuesta:**  
Utilizar una lista de verificación del DoD antes de mover cualquier elemento a la columna `Done`, comprobando que todas las evidencias requeridas se encuentren disponibles.

---

### 2.4. Fricción de Cristian Chura Peralta

**Fecha:** 25/09/2026  

**Evento observado:**  
Durante los primeros cuatro días hábiles del Sprint 1 (del 21/09/2026 al 24/09/2026), la línea de avance real del gráfico burndown permaneció plana en 10 puntos pendientes debido a que el Issue #5 (`Implementar endpoint GET /citas/{citaId}`) permaneció retenido en la columna `Todo` por no declarar su requisito funcional (`RF-003`) según la Definición de Preparado (DoR), y las tarjetas del tablero `B-5` carecían del campo numérico de estimación (`Story Points`) al iniciar la iteración.

**Categoría:** Procesos  

**Evidencia:**

- Tablero de GitHub Projects (`B-5`) con los Issues #2, #3 y #5 estancados en la columna `Todo` hasta el Día 5 del sprint.
- Tabla del `Reporte_Velocidad_Sprint1_VetCare.md`, que registra 10 puntos pendientes sin variación desde el Día 0 hasta el Día 4, bajando a 7 puntos el Día 5 (25/09/2026) tras el cierre del Issue #8.
- Sección 7 del Paquete de Acuerdos de la Semana 3, donde consta el bloqueo de entrada del Issue #5 por incumplir la Definición de Preparado (DoR).

**Acción de mejora propuesta:**  
Ejecutar una verificación obligatoria del filtro de la Definición de Preparado (DoR), confirmando requisito `RF-00X`, operación del contrato OpenAPI, caso de prueba `TST-XX` y puntaje en el campo `Story Points`, veinticuatro horas antes del Día 1 del próximo sprint.

---

## 3. Resumen de fricciones

| Integrante | Fecha | Fricción resumida | Categoría |
|---|---|---|---|
| Alexis Erik Ricardo Condori Rivera | 23/09/2026 | Errores de configuración en el workflow de SonarQube/SonarCloud retrasaron el análisis de deuda técnica. | Herramientas |
| Jose Antonio Vilcanqui Chambi | 23/09/2026 | Una credencial de acceso fue compartida por chat en lugar de utilizar GitHub Secrets y posteriormente tuvo que ser revocada. | Procesos |
| Luis David Cruz Llica | 25/09/2026 | Se generó retrabajo al determinar si un issue con PR fusionado cumplía realmente todos los criterios del DoD. | Definición de Terminado |
| Cristian Chura Peralta | 25/09/2026 | Elementos incompletos según el DoR y la falta inicial de Story Points contribuyeron al estancamiento del burndown durante los primeros días. | Procesos |

---

## 4. Acciones de mejora acordadas

### Acción de mejora 1: Validación segura de la configuración de CI/CD

**Problemas relacionados:**  
Errores de configuración en SonarQube/SonarCloud y manejo inadecuado de credenciales durante la configuración del flujo de integración continua.

**Acción:**  
Realizar los cambios de configuración de CI/CD mediante programación en pares o probarlos previamente en una rama paralela. Las credenciales necesarias deberán almacenarse únicamente mediante GitHub Secrets y no deberán compartirse directamente mediante chats u otros medios inseguros.

**Responsable:** Alexis Erik Ricardo Condori Rivera  

**Aplicación:** Segunda mitad del Sprint 1 y siguientes configuraciones de CI/CD.

---

### Acción de mejora 2: Verificación previa del DoR y del DoD

**Problemas relacionados:**  
Ingreso de elementos incompletos al sprint y dificultad para determinar posteriormente si los elementos pueden considerarse terminados.

**Acción:**  
Realizar una revisión obligatoria del tablero antes del inicio de cada sprint. Para cada elemento se deberá comprobar:

- Requisito funcional `RF-00X`.
- Operación o endpoint del contrato OpenAPI, cuando corresponda.
- Caso de prueba `TST-XX`.
- Story Points asignados.
- Cumplimiento de los criterios de la Definición de Preparado (DoR).

Antes de mover un elemento a `Done`, se utilizará además una lista de verificación de la Definición de Terminado (DoD) para comprobar que todas las evidencias requeridas estén disponibles.

**Responsable:** Cristian Chura Peralta  

**Aplicación:** Verificación inicial para el Sprint 2 y aplicación del checklist de DoD durante la segunda mitad del Sprint 1.

---

## 5. Acuerdos de la retrospectiva

1. No se moverá ningún elemento del tablero a `Done` únicamente porque su Pull Request haya sido fusionado; primero se verificará el cumplimiento completo de la Definición de Terminado.
2. Antes de iniciar un nuevo sprint se revisará que las tarjetas cumplan la Definición de Preparado y tengan sus Story Points registrados.
3. Las configuraciones relacionadas con CI/CD serán verificadas en una rama paralela o mediante revisión de otro integrante antes de afectar el flujo principal.
4. Las credenciales y tokens utilizados por las herramientas del proyecto se almacenarán mediante mecanismos seguros como GitHub Secrets.

---

## 6. Conclusión

La retrospectiva de medio Sprint 1 permitió identificar fricciones relacionadas con herramientas, procesos y la aplicación de la Definición de Terminado.

Los principales problemas observados estuvieron relacionados con la configuración del flujo de integración continua, el manejo de credenciales, la preparación incompleta de elementos antes de ingresar al sprint y la necesidad de verificar de forma explícita el cumplimiento del DoD antes de considerar un trabajo como terminado.

Como resultado, el equipo acordó reforzar la validación de las configuraciones de CI/CD y establecer verificaciones más claras del DoR y DoD. Estas medidas buscan reducir retrabajos y mejorar la trazabilidad y el flujo de trabajo durante la segunda mitad del Sprint 1 y los siguientes sprints.
