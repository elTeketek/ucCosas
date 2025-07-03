# Ubicate UC

Aplicación de mapas basada en Next.js que utiliza el Kit Digital UC y Mapbox GL JS.
Los estilos y scripts del Kit Digital se cargan desde el CDN oficial según su documentación.

## Configuración

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Definir el token de Mapbox en un archivo `.env.local`:
   ```bash
   NEXT_PUBLIC_MAPBOX_TOKEN=tu_token
   ```
3. Opcionalmente definir `DATA_BASE_URL` para los JSON con datos.

## Despliegue

La aplicación puede desplegarse fácilmente en Vercel.
