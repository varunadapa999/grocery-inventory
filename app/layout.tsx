import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pantry | Grocery inventory",
  description: "A little more order for your everyday store.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
