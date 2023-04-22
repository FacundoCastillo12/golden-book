import React from "react";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import NavbarMenu from "@/components/navbar/Navbar";
import LanguageContextProvider, {
  LanguageContext,
} from "@/contexts/ContextLanguage";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <LanguageContext.Consumer>
        {() => (
          <>
            <NavbarMenu />
            <Component {...pageProps} />
          </>
        )}
      </LanguageContext.Consumer>
    </LanguageContextProvider>
  );
}
