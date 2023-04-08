import React from "react";
import Head from "next/head";
import Main from "@/components/main/Main";

import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Golden Webnovel</title>
        <meta name="description" content="Golden Web Novel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </div>
  );
}
