import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PestorraX - Your Shield Against Unwanted Pests",
  description: "Professional pest control services including termite control, rodent control, cockroach control, mosquito control, and bedbug treatment. Eco-friendly solutions for your home and business.",
  keywords: "pest control, termite control, rodent control, cockroach control, mosquito control, bedbug treatment, eco-friendly pest control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
