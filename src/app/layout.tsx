import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Website",
  description: "Testomgeving voor de workflow Claude → GitHub → Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="font-body text-ink antialiased">{children}</body>
    </html>
  );
}
