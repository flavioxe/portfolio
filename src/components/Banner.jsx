import styles from "./Banner.module.scss";

export function Banner() {
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
            <span className={styles.aboutTitle}>ABOUT</span>
            <span className={styles.aboutDescription}>
              I'm Flávio, a fullstack developer based in Recife. With a
              background in architecture and urbanism, I bring a unique
              perspective to my work in web development. My passion lies in
              crafting engaging digital experiences. Let's collaborate on
              innovative projects!
            </span>
          </p>
        </main>
      </section>
    </>
  );
}
