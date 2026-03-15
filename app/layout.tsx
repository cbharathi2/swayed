import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swayed Over Coffee",
  description: "Freshly Brewed Coffee and Homemade Pastries",
  icons: {
    icon: [{ url: "/logo.jpeg", type: "image/jpeg" }],
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased bg-stone-50 text-stone-900 font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
