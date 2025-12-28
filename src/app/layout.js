import "./globals.css";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CursorProviderWrapper from "../context/CursorProvider";

const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded-1c",
  subsets: ["latin"],
  weight: "400",
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
        className={`${mPlusRounded1c.variable} antialiased`}
        style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
      >
        <CursorProviderWrapper>
          <Header />
          {children}
          <Footer />
        </CursorProviderWrapper>
      </body>
    </html>
  );
}
