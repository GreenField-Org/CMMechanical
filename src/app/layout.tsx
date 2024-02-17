import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";
import Nav from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | C&M Mechanical Heating and Cooling",
    default: "C&M Mechanical Heating and Cooling",
  },
  description:
    "C&M Mechanical HVAC provides services for all types of heating systems and cooling systems.",
  keywords:
    "HVAC, installation, air conditioning, heating, ductless, mitsubishi, NYSERDA, american standard dealer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
