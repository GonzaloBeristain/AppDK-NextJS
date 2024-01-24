import { Navbar } from "@/components/Navbar.jsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DonkeyKong App",
  description: "Generated by create next app",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-green-950 via-green-950 to-green-900 text-yellow-400">
        <Navbar />
        <main className={inter.className}>
          {children}
        </main>
        <footer className="text-center py-1 text-yellow-700 flex justify-center items-end">Created By Gonzalo Beristain - 2024</footer>
      </body>
    </html>
  );
};