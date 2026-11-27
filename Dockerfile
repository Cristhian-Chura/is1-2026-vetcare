# Imagen de VetCare (Semana 14). No lleva secretos ni configuración: todo llega por variables de entorno.
# Base con versión fijada, para que la imagen sea reproducible.
FROM node:20.18.1-alpine3.20
LABEL org.opencontainers.image.source=https://github.com/Cristhian-Chura/is1-2026-vetcare

WORKDIR /app

# Las dependencias cambian poco: se instalan antes de copiar el código, solo las de producción.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Solo lo necesario para ejecutar: el código y el proceso de administración (factor XII).
COPY src ./src
COPY scripts/migrar.js ./scripts/migrar.js

USER node
CMD ["node", "src/server.js"]
