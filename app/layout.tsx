import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import CookieConsent from '@/components/CookieConsent';
import Script from 'next/script';

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Evrything AB | Transport, Bud & Logistik i Göteborg",
  description: "Expresstransporter, bud och logistiklösningar i Göteborg och hela Sverige. Snabbt, tryggt och prisvärt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'consent_default',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied'
          });
        `}</Script>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KV3SGV3G');
        `}</Script>
      </head>
      <body className={jakarta.variable + " " + dmSerif.variable + " antialiased"}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV3SGV3G"
            height="0" width="0" style={{display:'none',visibility:'hidden'}} />
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}