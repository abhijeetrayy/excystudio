import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navbar/header";
import Footer from "@/components/footbar/footbar";

export const metadata: Metadata = {
  title: "Excy Studio - Creative Design Solutions",
  description:
    "Excy Studio offers innovative design solutions for web, app, and 3D rendering projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
