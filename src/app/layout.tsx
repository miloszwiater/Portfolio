import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miłosz Wiater — Full-Stack Developer",
  description:
    "Full-Stack Developer (TypeScript / Node.js, .NET 9 / C#, PHP / Laravel). Web, mobile, desktop. SaaS B2B, marketplace, CRM, e-commerce.",
  openGraph: {
    title: "Miłosz Wiater — Full-Stack Developer",
    description:
      "Full-Stack Developer specjalizujący się w aplikacjach webowych, mobilnych i desktopowych.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <div className="mesh-bg" />
        {children}
      </body>
    </html>
  );
}
