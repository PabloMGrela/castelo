# Guía de Despliegue: GitHub Pages + IONOS

Esta guía explica cómo desplegar tu página de logopedia en **GitHub Pages** utilizando tu propio dominio de **IONOS**.

## 1. Preparar el Repositorio en GitHub

1.  Asegúrate de que tu código esté en un repositorio de GitHub.
2.  Ve a `Settings` > `Pages`.
3.  En **Build and deployment** > **Source**, selecciona `GitHub Actions`.

## 2. Configurar el Dominio en GitHub

1.  En la misma sección de `Pages`, busca **Custom domain**.
2.  Escribe tu dominio (ej: `www.tudominio.com` o `logopediacastelo.com`).
3.  Haz clic en **Save**. GitHub creará un archivo `CNAME` en tu rama de despliegue automáticamente (o lo requerirá en tu proceso de build).

## 3. Configurar DNS en IONOS

Para que tu dominio apunte a GitHub, debes entrar en tu panel de control de IONOS y modificar los registros DNS de tu dominio:

### A. Registros A (Apex Domain)
Si quieres usar el dominio sin `www` (ej: `tudominio.com`), configura estos 4 registros **A**:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### B. Registro CNAME (para www)
Si usas `www`, configura un registro **CNAME**:
- **Host**: `www`
- **Puntos a**: `tu-usuario.github.io` (sustituye `tu-usuario` por tu nombre de usuario de GitHub).

> [!IMPORTANT]
> Los cambios de DNS pueden tardar desde unos minutos hasta 24-48 horas en propagarse totalmente.

## 4. Automatizar con GitHub Actions (Recomendado)

Crea un archivo en `.github/workflows/deploy.yml` con este contenido para que la página se actualice sola al hacer `git push`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with:
          channel: 'stable'
      - name: Build Web
        run: flutter build web --release --base-href "/"
      - name: Copy CNAME to build output
        run: cp CNAME build/web/CNAME
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build/web
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 5. Verificar HTTPS

Una vez configurado todo y que GitHub haya verificado el dominio:
1.  Vuelve a `Settings` > `Pages`.
2.  Marca la casilla **Enforce HTTPS**. (Esto puede tardar un poco mientras se genera el certificado SSL).

## 6. Estado del Despliegue

✅ **El workflow de despliegue está completamente configurado:**
- El archivo `.github/workflows/deploy.yml` está configurado correctamente con el environment necesario
- El archivo `CNAME` se copia automáticamente al directorio de build
- El despliegue se activa automáticamente cuando se hace push a la rama `main`
- La página se desplegará en `logopediacastelo.com` una vez que los registros DNS estén propagados

¡Listo! Tu web profesional de logopedia estará disponible en tu propio dominio. 🚀🍐
