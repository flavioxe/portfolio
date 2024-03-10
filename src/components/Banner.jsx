import styles from "./Banner.module.scss";

export function Banner() {
  return (
    <>
      <section
        className={`${styles.bannerWrapper}  d-flex align-items-center justify-content-start`}
      >
        <div className={styles.textTop}>
          <div>
            <span>full___stack</span>
          </div>
        </div>
        <div className={styles.textBottom}>
          <div className="d-flex align-items-center">
            developer{" "}
            <span className={styles.aboutTitle}>
              ABOUT{" "}
              <span className={styles.aboutDescription}>
                I'm Flávio, a fullstack developer based in Recife. With a
                background in architecture and urbanism, I bring a unique
                perspective to my work in web development. My passion lies in
                crafting engaging digital experiences so I'm currently studying
                Information Technology Management to enhance my skills. Let's
                collaborate on innovative projects!
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
