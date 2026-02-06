import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

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
      <body className={jakarta.variable + " " + dmSerif.variable + " antialiased"}>
        {children}
      </body>
    </html>
  );
}