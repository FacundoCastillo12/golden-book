/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from "react";
import english from "@/data/lang/english";
import spanish from "@/data/lang/spanish";
import { Language } from "@/interface/Language";
import useLocalStorage from "@/hooks/useLocalStorage";

type LanguageContextType = {
  lang: string;
  content: Language; // Aquí deberías definir un tipo para el contenido de acuerdo a tus necesidades
  setLang: (newLang: string) => void;
};

export const LanguageContext = React.createContext<LanguageContextType>(
  {} as LanguageContextType
);

const THEME_KEY = "myLanguage";

function LanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<string>("en");
  const [language, setLanguage] = useLocalStorage<string>(THEME_KEY, "en");
  const [content, setContent] = useState<Language>(english);

  useEffect(() => {
    if (language === "es") {
      setContent(spanish);
      setLang(language);
    } else {
      setContent(english);
      setLang(language);
    }
  }, [language]);

  useEffect(() => {
    if (language === "es") {
      setContent(spanish);
      setLang("es");
    } else {
      setContent(english);
      setLang("en");
    }
  }, [language]);

  const handleSetLang = (newLang: string) => {
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, content, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
export default LanguageContextProvider;
