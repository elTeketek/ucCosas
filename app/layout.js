export const metadata = {
  title: 'Ubicate UC',
  description: 'Mapa interactivo de campus UC',
};

import '../public/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://kit-digital-uc-prod.s3.amazonaws.com/uc-kitdigital/css/uc-kitdigital.css"
        />
        <Script
          src="https://kit-digital-uc-prod.s3.amazonaws.com/uc-kitdigital/js/uc-kitdigital.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
