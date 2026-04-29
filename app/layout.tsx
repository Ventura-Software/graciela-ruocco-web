import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Graciela Ruocco & Asociados — Asesoramiento Legal Especializado",
  description: "Estudio jurídico en Montevideo, Uruguay. Especialistas en Derecho Administrativo, Previsión Social y Escribanía para personas y empresas.",
  keywords: ["derecho administrativo", "previsión social", "abogado uruguay", "estudio jurídico", "BPS", "escribanía"],
  authors: [{ name: "Graciela Ruocco & Asociados" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Graciela Ruocco & Asociados",
    description: "Estudio jurídico especializado en Derecho Administrativo y Previsión Social",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`antialiased ${playfair.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
