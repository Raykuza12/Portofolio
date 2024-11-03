import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/navbar";
import { ThemeProvider } from "./component/ThemeContext";

export const metadata: Metadata = {
  title: "Muhamad Rizki Ardiansyah",
  description: "Website Portfolio Muhamad Rizki Ardiansyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
