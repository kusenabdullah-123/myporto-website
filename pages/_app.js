import "../styles/globals.css";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kusena Dev Portofolio</title>
        <link rel="shortcut icon" href="/image/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
