import { ButtonPrimary } from "./ButtonPrimary";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <>
      <footer
        className={`${styles.footerWrapper} d-flex flex-column align-items-start position-relative`}
      >
        <main
          className={`${styles.footerUpperBox} d-flex align-items-start justify-content-between w-100`}
        >
          {/* Email */}
          <aside
            className={`${styles.footerEmailBox} d-flex align-items-start`}
          >
            <div>
              <h5>Let's work together!</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <ButtonPrimary text="Reach out" />
          </aside>

          <aside className={`${styles.footerMenuBox} d-flex`}>
            {/* Socials */}
            <div className={`d-flex flex-column`}>
              <h5>My Socials</h5>
              <a href="#">LinkedIn</a>
              <a href="#">Github</a>
            </div>

            {/* Website */}
            <div className={`d-flex flex-column`}>
              <h5>Site</h5>
              <a href="#"> Projects</a>
              <a href="#"> About me</a>
              <a href="#">Back to the top 🡡</a>
            </div>
          </aside>
        </main>

        <p className={`${styles.footerFlavio}`}>flávio</p>
      </footer>
    </>
  );
}
