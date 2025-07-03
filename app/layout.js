export const metadata = {
  title: 'Ubicate UC',
  description: 'Mapa interactivo de campus UC',
};

import '../public/global.css';
import '@digitaluc/uc-kitdigital/dist/css/uc-kitdigital.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script src="/uc-kitdigital.js" strategy="beforeInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
