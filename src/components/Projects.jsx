import { useTranslation } from "react-i18next";
import styles from "./Projects.module.scss";

export function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <section className={`${styles.projectsWrapper} d-flex flex-column`}>
        <h2 className={`${styles.projectsTitle}`}>{t("projects")}</h2>
        <main className={`${styles.projectsList} d-flex flex-column`}>
          {/* Single project */}
          <div className={`${styles.projectBox} d-flex align-items-center`}>
            <img
              src="https://midias.correio24horas.com.br/2024/03/28/beyonce-2057011-article.png"
              alt="Project 1 media"
              className={`${styles.projectImg}`}
            />
            <aside
              className={`${styles.projectTextBox} d-flex flex-column align-items-start`}
            >
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                sed vero rem, architecto possimus temporibus reprehenderit
                officiis provident culpa corporis illum optio sapiente dolor
                officia accusamus inventore saepe velit amet?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nihil sed vero rem,
                architecto possimus temporibus reprehenderit officiis provident
                culpa corporis illum optio sapiente dolor officia accusamus
                inventore saepe velit amet?
              </p>
              <a href="#">{t("visit")}</a>
            </aside>
          </div>

          {/* Single project */}
          <div className={`${styles.projectBox} d-flex align-items-center`}>
            <aside
              className={`${styles.projectTextBox} ${styles.projectTextBoxLeft} d-flex flex-column align-items-end text-end`}
            >
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                sed vero rem, architecto possimus temporibus reprehenderit
                officiis provident culpa corporis illum optio sapiente dolor
                officia accusamus inventore saepe velit amet?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nihil sed vero rem,
                architecto possimus temporibus reprehenderit officiis provident
                culpa corporis illum optio sapiente dolor officia accusamus
                inventore saepe velit amet?
              </p>
              <a href="#">{t("visit")}</a>
            </aside>
            <img
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/Beyonce-funk-brasileiro-novo-album-cowboy-carter-e1711744764932.jpg?w=891"
              alt="Project 1 media"
              className={`${styles.projectImg}`}
            />
          </div>
        </main>
      </section>
    </>
  );
}
