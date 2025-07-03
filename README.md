# Ubicate UC

Aplicación de mapas basada en Next.js que utiliza el Kit Digital UC y Mapbox GL JS.

## Configuración

1. Instalar dependencias:
   ```bash
   npm install
   ```
   Si la compilación falla con el mensaje `Module not found: Can't resolve 'react-map-gl/mapbox'`,
   instala explícitamente las dependencias necesarias:
   ```bash
   npm install react-map-gl@^8 mapbox-gl
   ```
2. Definir el token de Mapbox en un archivo `.env.local`:
   ```bash
   NEXT_PUBLIC_MAPBOX_TOKEN=tu_token
   ```
3. Opcionalmente definir `DATA_BASE_URL` para los JSON con datos.

## Despliegue

La aplicación puede desplegarse fácilmente en Vercel.
