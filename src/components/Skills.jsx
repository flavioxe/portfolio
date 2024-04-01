import styles from "./Skills.module.scss";
import { Skill } from "./Skill";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  return (
    <>
      <section className={`${styles.skillsWrapper} d-flex flex-column`}>
        <h2>{t("mySkills")}</h2>

        <main className={`${styles.skillsList}`}>
          <Skill text="HTML" />
          <Skill text="CSS" />
          <Skill text="Javascript" />
          <Skill text="Vue.js" />
          <Skill text="Nuxt" />
          <Skill text="React" />
          <Skill text="Git" />
          <Skill text="Github" />
          <Skill text="SASS" />
          <Skill text="Bootstrap" />
          <Skill text="PHP" />
          <Skill text="Laravel" />
          <Skill text="Python" />
          <Skill text="Java" />
          <Skill text="Kanban" />
          <Skill text="Scrum" />
          <Skill text="Figma" />
          <Skill text="Illustrator" />
        </main>
      </section>
    </>
  );
}
