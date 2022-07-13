import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import about from "../data/about";
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name={about.title} content={about.description} />
        <title>{about.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
      <Script src="https://kit.fontawesome.com/aaed24aef3.js" crossOrigin="anonymous" strategy='beforeInteractive'></Script>
    </div>
  );
}
