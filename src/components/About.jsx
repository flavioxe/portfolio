import styles from "./About.module.scss";

export function About() {
  return (
    <>
      <section
        className={`${styles.aboutWrapper} d-flex justify-content-between`}
      >
        <h2>Hello 🙋🏽</h2>
        <aside className={`${styles.aboutAside} d-flex flex-column`}>
          <img
            src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/386433550_267670419028482_1291124977464742649_n.jpg?ccb=11-4&oh=01_ASDjv4IBPUlRrxbM2zaHqjbLNRWGKxqcRVKjSxEeffudfQ&oe=6617F9CC&_nc_sid=e6ed6c&_nc_cat=109"
            alt="Self photo"
            className={`${styles.aboutPhoto}`}
          />

          <h4 className={`${styles.aboutTitle}`}>
            I'm Flávio Mendonça, a fullstack developer.
          </h4>

          <p>
            Coming from a background in architecture and urbanism, three years
            ago I embarked on an exciting journey, transitioning my career into
            the realm of fullstack development. This shift has allowed me to
            bring a unique perspective to my work, combining my design
            sensibilities with technical expertise. I thrive in collaborative
            environments, adapting swiftly to new challenges while maintaining a
            keen focus on achieving results. Eager to embrace continuous
            learning, I am passionate about exploring new technologies and
            approaches to enhance my skills and contribute effectively to
            dynamic teams and projects.
          </p>
        </aside>
      </section>
    </>
  );
}
