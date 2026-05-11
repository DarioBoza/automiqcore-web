import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "AUTOMIQ -CORE- | Agencia de IA para Negocios B2B",
  description: "Transformamos empresas con agentes de IA, automatizaciones inteligentes y landing pages de alta conversión.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
