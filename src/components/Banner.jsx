import { useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";

export function Banner() {
  const { t } = useTranslation();

  return (
    <>
      <section
        className={`${styles.bannerWrapper}  d-flex align-items-center justify-content-start`}
      >
        <main className="d-flex align-items-center">
          <h1 className={`${styles.bannerText}`}>Full___Stack</h1>
        </main>
        <main className="d-flex align-items-center">
          <h1 className={`${styles.bannerText}`}>Developer</h1>
          <p className={styles.aboutWrapper}>
            <span className={styles.aboutTitle}>{t("about")}</span>
            <span className={styles.aboutDescription}>{t("bannerAbout")}</span>
          </p>
        </main>
      </section>
    </>
  );
}
