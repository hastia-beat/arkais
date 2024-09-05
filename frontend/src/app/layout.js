import { Gabarito } from "next/font/google";
import Head from "next/head"; // Import Head untuk manipulasi head
import "./globals.css";
import Navbar from "./components/utilities/Navbar/Navbar";
import Footer from "./components/utilities/Footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "ArkaisEdu",
  description: "Arkais App is a web application that provides a collection of ancient words from various languages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
