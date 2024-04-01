import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <section
        className={`${styles.aboutWrapper} d-flex justify-content-between`}
      >
        <h2>{t("hello")} 🙋🏽</h2>
        <aside className={`${styles.aboutAside} d-flex flex-column`}>
          <img
            src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/386433550_267670419028482_1291124977464742649_n.jpg?ccb=11-4&oh=01_ASDjv4IBPUlRrxbM2zaHqjbLNRWGKxqcRVKjSxEeffudfQ&oe=6617F9CC&_nc_sid=e6ed6c&_nc_cat=109"
            alt="Self photo"
            className={`${styles.aboutPhoto}`}
          />

          <h4 className={`${styles.aboutTitle}`}>{t("presentation")}</h4>

          <p>{t("aboutDescription")}</p>
        </aside>
      </section>
    </>
  );
}
