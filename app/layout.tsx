import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Landing/Footer/Footer";

import Navbar from '@/components/Navbar';
import { Coolvetica, RobotoFonts } from "@/lib/fonts";




export const metadata: Metadata = {
  title: "Loreon Technologies",
  description: "Generated by create next app",

  openGraph:{
    title: "Generated by create next app",
    
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
      className = {`${Coolvetica.variable} ${RobotoFonts.variable}`}>
      <body>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
