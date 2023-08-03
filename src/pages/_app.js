"use client";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/testimonial.scss";
import "../styles/homepage.css";
import Head from 'next/head';
import favicon from '../Images/favicon.ico'
// import { Open_Sans } from '@next/font/google'
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
// const open_sans = Open_Sans({
//   subsets: ['latin'],
//   weight: ['400', '700']
// })

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  });

  return (
    <SessionProvider session={session}>
    <Head>
      <link rel="shortcut icon" href={favicon.src} />
    </Head>
      <main
      // className={open_sans.className}
      >
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
