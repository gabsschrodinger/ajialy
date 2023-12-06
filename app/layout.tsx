import "./globals.css";

import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajialy",
  description: "Songs in Japanese, English, and Portuguese",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
