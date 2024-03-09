import styles from "./ButtonPrimaty.module.scss";

export function ButtonPrimary({ text }) {
  return (
    <>
      <button className={styles.btnPrimary}>
        <div className={styles.btnIntern}></div>
        <span className={styles.btnText}>{text}</span>
      </button>
    </>
  );
}
