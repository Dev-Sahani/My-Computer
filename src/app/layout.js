import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "My Computer Udaipur - one step solution for your computer & electronics needs.",
  description:
    "My Computer Udaipur, led by Ajay Dodeja, is a one-stop solution for all your computer and electronics needs." +
    "We offer both wholesale and retail services for a wide range of products, including laptops, desktops, printers, scanners, and cameras." +
    "We also provide affordable services such as camera installation, laptop repair, and computer repair." +
    "Our team of experienced professionals is dedicated to delivering the best possible service to our customers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

        <Cursor />
      </body>
    </html>
  );
}
