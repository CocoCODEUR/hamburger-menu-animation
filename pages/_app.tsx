import "../styles/globals.scss";
import "../styles/header.scss";

import type { AppProps } from "next/app";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="home">
      <Header></Header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
