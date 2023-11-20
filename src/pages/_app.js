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
import Script from 'next/script'
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

        {/* Facebook Customer Chat Script */}
        <Script>
          {`
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "166029633263483");
    chatbox.setAttribute("attribution", "biz_inbox");
  `}
        </Script>
      </Head>
      <main
      // className={open_sans.className}
      >
        <div id="fb-root"></div>

        <div id="fb-customer-chat" class="fb-customerchat"></div>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
