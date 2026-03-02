# Deploy to UAT (Raspberry Pi)

Este documento describe el proceso paso a paso para desplegar la aplicación web de Castelo en el entorno de UAT local (Raspberry Pi) utilizando Docker y Nginx.

## Requisitos Previos
- Tener acceso SSH a la Raspberry Pi (`raspberrypi`).
- Haber aceptado las licencias de Xcode en el Mac (`sudo xcodebuild -license accept`).
- Tener configurados en el proyecto los archivos `nginx.conf` y `docker-compose.yml`.

## Pasos de Despliegue

### 1. Compilar la Aplicación Web
Primero, genera la versión de producción para web ejecutando el siguiente comando en la raíz del proyecto:
```bash
flutter build web
```

### 2. Transferir Archivos al Servidor
Una vez completada la compilación, usa `rsync` para copiar la carpeta compilada (`build/web/`), así como los archivos de configuración de infraestructura (`nginx.conf` y `docker-compose.yml`), a la carpeta de despliegue en la Raspberry Pi (`~/castelo_web`):

```bash
# Sincronizar la build
rsync -avz --delete build/web/ raspberrypi:castelo_web/

# Sincronizar archivos de configuración Docker/Nginx
rsync -avz nginx.conf docker-compose.yml raspberrypi:castelo_web/
```

### 3. Levantar el Contenedor Docker
Conéctate por SSH a la Raspberry Pi, entra en el directorio del proyecto y levanta o reinicia el contenedor de Nginx:

```bash
ssh raspberrypi "cd castelo_web && docker compose up -d"
```

## Verificación
Una vez finalizado, puedes verificar que el estado del contenedor es correcto ejecutando:
```bash
ssh raspberrypi "docker ps | grep castelo_web"
```

La aplicación estará disponible en la red local en la dirección:
👉 **[http://raspberrypi.local:8081](http://raspberrypi.local:8081)**
