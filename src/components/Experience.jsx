import { useTranslation } from "react-i18next";
import styles from "./Experience.module.scss";

export function Experience() {
  const { t } = useTranslation();

  return (
    <>
      <section className={`${styles.experiencesWrapper} d-flex flex-column`}>
        <h2>{t("hello")}</h2>
      </section>
    </>
  );
}
