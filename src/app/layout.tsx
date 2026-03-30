import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
} );

export const metadata: Metadata = {
  title: "Cifrato Lite",
  description: "Cifrato Lite",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html
      lang="es"
      className={ `${ geistSans.variable } ${ geistMono.variable } h-full antialiased` }
    >
      <body className="min-h-full font-sans antialiased text-gray-900 bg-gray-100 selection:bg-blue-100">
        <main className="mx-auto max-w-md bg-gray-50 min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
          { children }
        </main>
      </body>
    </html>
  );
}
