import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";
import Nav from "./components/navbar/navbar";
import Script from "next/script";
import { Metadata } from "next";
import Head from "next/head";
import { Roboto_Condensed } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s | C&M Mechanical Heating and Cooling",
    default: "C&M Mechanical Heating and Cooling",
  },
  description:
    "C&M Mechanical HVAC provides services for all types of heating systems and cooling systems.",
  keywords:
    "HVAC, installation, air conditioning, heating, ductless, mitsubishi, NYSERDA, american standard dealer",
  openGraph: {
    title: "C&M Mechanical Heating and Cooling",
    description:
      "C&M Mechanical HVAC provides services for all types of heating systems and cooling systems.",
    url: "https://www.cmmechanicalhvac.com",
    siteName: "C&M Mechanical Heating and Cooling",
    images: [
      {
        url: "https://www.cmmechanicalhvac.com/CMMechanical_logo.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.cmmechanicalhvac.com/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="flex min-h-screen flex-col items-center justify-between px-24">
          {children}
        </main>
        <Footer />
        {/*<Script id="script">window.danteEmbed = &quot;https://chat.dante-ai.com/embed?kb_id=5821f9fb-5692-4892-918f-16e7828e21e6&token=d375d38d-98ac-4f86-82bc-8dc70c0c30cf&modeltype=gpt-3.5-turbo&mode=false&bubble=true&image=null&bubbleopen=false&quot;</Script> 
      <Script src="https://chat.dante-ai.com/bubble-embed.js" />*/}
      </body>
    </html>
  );
}
