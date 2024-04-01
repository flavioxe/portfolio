import { useTranslation } from "react-i18next";
import { ButtonPrimary } from "./ButtonPrimary";
import styles from "./Header.module.scss";
import { useState } from "react";

export function Header() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <header
        className={`${styles.header} d-flex align-items-center justify-content-between`}
      >
        <img src="https://github.com/flavioxe.png" alt="Flávio's logo" />

        <nav className="d-flex align-items-center">
          <a href="#" className="btnLink">
            {t("projects")}
          </a>
          <a href="#" className="btnLink">
            {t("aboutMe")}
          </a>

          <ButtonPrimary text={`${t("contact")}`} />

          <button onClick={handleChangeLanguage}>PT</button>
          <button onClick={handleChangeLanguage}>EN</button>
        </nav>
      </header>
    </>
  );
}
