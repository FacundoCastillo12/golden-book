/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { LanguageContext } from "@/contexts/ContextLanguage";

function MenuLanguage() {
  const { content, setLang } = useContext(LanguageContext);
  const handleLanguageSpanish = () => {
    setLang("es");
    toast.success("El idioma se ha cambiado correctamente al español.");
  };
  const handleLanguageEnglish = () => {
    setLang("en");
    toast.success("The language was changed to English correctly.");
  };

  return (
    <div className="dropdown-end dropdown hidden sm:block ">
      <Toaster />
      <label
        htmlFor="language-icon"
        tabIndex={0}
        className="btn-ghost btn-circle btn"
      >
        <div id="language-icon" className="w-10 rounded-full">
          <FontAwesomeIcon icon={faGlobe} size="lg" />
        </div>
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-24 bg-base-100 p-2 shadow"
      >
        <li>
          <button type="button" onClick={handleLanguageSpanish}>
            {content.navBar.spanish}
          </button>
        </li>
        <li>
          <button type="button" onClick={handleLanguageEnglish}>
            {content.navBar.english}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MenuLanguage;
