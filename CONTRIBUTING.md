# Guía de Contribución del Proyecto VetCare

¡Bienvenido al repositorio del equipo B-5! Para mantener la calidad técnica y la transparencia en la historia de Git, todos los integrantes deben seguir este flujo de trabajo obligatoriamente.

---

## 🌿 1. Nomenclatura de Ramas
Toda funcionalidad, documentación o corrección se trabaja en una rama de vida corta basada en `main` actualizado (`git checkout main && git pull`).
- **Nuevas características**: `feat/` + descripción corta (ej. `feat/citas-cancelacion`)
- **Corrección de errores**: `fix/` + descripción corta (ej. `fix/ci-sha-sonar`)
- **Documentación / Proceso**: `docs/` + descripción corta (ej. `docs/plantillas-dod-dor`)
- **Tareas de mantenimiento / orden**: `chore/` + descripción corta (ej. `chore/orden-repositorio`)

*Regla de oro:* **Ninguna rama debe vivir más de 3 días calendario sin integrarse a `main`.**

---

## 📝 2. Convención de Mensajes de Commit
Seguimos el formato de **Commits Convencionales**: `tipo(alcance): descripción (#issue)`

- **Ejemplo de Feature**: `feat(citas): implementa endpoint POST /citas (#12)`
- **Ejemplo de Docs**: `docs(github): agrega plantillas de PR e issues con DoD y DoR (#14)`
- **Ejemplo de Fix**: `fix(ci): fija sonarqube-scan-action por SHA (#15)`

---

## 🔄 3. Flujo de Trabajo (Git / GitHub Projects)
1. **Primero un Issue**: Ningún trabajo se inicia sin un issue asignado en la columna `Ready` del tablero `B-5`.
2. **Creación de Rama**: Se crea la rama local siguiendo la nomenclatura.
3. **Desarrollo y Commit**: Commits atómicos siguiendo la convención y haciendo referencia al número de issue (`#N`).
4. **Pull Request (PR)**: Se abre un PR hacia `main` usando la plantilla predeterminada, vinculando el issue (`Cierra #N`).
5. **Revisión entre Pares**: Se solicita la revisión a un compañero (se exige 1 aprobación obligatoria).
6. **Integración (`Merge`)**: Tras aprobar la revisión y pasar las verificaciones automatizadas, se realiza el merge.

---

## 🤝 4. Acuerdos de Equipo (Working Agreements)
- **Disponibilidad**: Cada integrante declara en el tablero de GitHub Projects su franja horaria semanal antes de iniciar el sprint.
- **Revisión de PRs**: Todo Pull Request recibe su primer comentario de revisión dentro de las **24 horas hábiles** tras su apertura.
- **Respuesta a Menciones**: Toda mención directa (`@usuario`) en issues o PRs se responde dentro de las **24 horas hábiles**.

---

## 📑 5. Criterios de Calidad (DoD y DoR)
- **Definición de Terminado (DoD)**: Todo PR debe satisfacer el checklist de 7 criterios definido en `.github/pull_request_template.md`.
- **Definición de Preparado (DoR)**: Todo issue debe incluir sus criterios de aceptación, RF-00X, endpoint afectado, SP y deudas de especificación con destinatario y supuesto.
- Consulta el documento completo en [`/docs/proceso/paquete-acuerdos-semana3.md`](docs/proceso/paquete-acuerdos-semana3.md).