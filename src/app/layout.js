import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "the news portal website",
  description: "made by shikhon mern 224-1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <div className="container mx-auto min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
