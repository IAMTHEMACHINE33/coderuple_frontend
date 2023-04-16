import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/testimonial.scss";
import "../styles/homepage.css";
// import { Open_Sans } from '@next/font/google'
import { useEffect } from "react";

// const open_sans = Open_Sans({
//   subsets: ['latin'],
//   weight: ['400', '700']
// })

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  });

  return (
    <main
    // className={open_sans.className}
    >
      <Component {...pageProps} />
    </main>
  );
}
