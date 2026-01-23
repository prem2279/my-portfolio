import type { Metadata } from "next";
import { Poppins, Playfair_Display, Nanum_Gothic } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["700", "900"],
  variable: "--font-playfair"
});

const nanum = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nanum"
});

export const metadata: Metadata = {
  title: "Prem Kumar Gundu | Full Stack Developer",
  description: "Portfolio of Prem Kumar Gundu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} ${nanum.variable} bg-main-gradient text-dark font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}