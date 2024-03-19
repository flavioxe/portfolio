import { ButtonPrimary } from "./ButtonPrimary";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <>
      <header
        className={`${styles.header} d-flex align-items-center justify-content-between`}
      >
        <img src="https://github.com/flavioxe.png" alt="Flávio's logo" />

        <nav className="d-flex align-items-center">
          <a href="#" className="btnLink">
            Projects
          </a>
          <a href="#" className="btnLink">
            About me
          </a>

          <ButtonPrimary text="Contact" />
        </nav>
      </header>
    </>
  );
}
