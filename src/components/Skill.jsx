import styles from "./Skills.module.scss";

export function Skill({ text }) {
  return (
    <>
      <p
        className={`${styles.skill} d-flex align-items-center justify-content-center`}
      >
        {text}
      </p>
    </>
  );
}
