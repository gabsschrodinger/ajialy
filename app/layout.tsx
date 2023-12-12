import "./globals.css";

import React from "react";

import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "ajialy",
  description: "Songs in Japanese, English, and Portuguese",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
