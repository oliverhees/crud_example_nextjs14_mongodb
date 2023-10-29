/* Root-Layout-Komponente für die Anwendung

   Diese React-Komponente stellt das Grundlayout der Anwendung dar. Sie importiert die 
   Schriftart "Inter" aus dem "next/font/google" und enthält eine einfache HTML-Struktur 
   mit einem Navbar-Element und einem Container für den Inhalt der Anwendung. Die Metadaten 
   für den Titel und die Beschreibung der Anwendung sind ebenfalls definiert.

   Autor: Oliver Hees - 28.10.2023
*/

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-0">
          <Navbar />
          <div className="mt-8 mb-8">{children}</div>
        </div>
      </body>
    </html>
  );
}