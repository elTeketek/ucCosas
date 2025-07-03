export const metadata = {
  title: 'Ubicate UC',
  description: 'Mapa interactivo de campus UC',
};

import '../public/global.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="icon"
          type="image/png"
          href="https://web-uc-prod.s3.amazonaws.com/uc-cl/dist/images/favicon.png"
        />
        <link
          rel="stylesheet"
          href="https://kit-digital-uc-prod.s3.amazonaws.com/uc-kitdigital/css/uc-kitdigital.css"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://kit-digital-uc-prod.s3.amazonaws.com/uc-kitdigital/js/uc-kitdigital.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
