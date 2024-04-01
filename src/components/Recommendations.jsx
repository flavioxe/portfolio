import styles from "./Recommendations.module.scss";
import { SingleRecommendation } from "./SingleRecommendation";

export function Recommendations() {
  return (
    <>
      <section className={`${styles.recommendationsWrapper}`}>
        <div className={`${styles.recommendationsAnimation}`}>
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://github.com/MRonald.png"
            linkedin="#"
            review="We worked together on the same team in our company, where I could witness his dedication and professionalism. In addition to his remarkable technical skills, Flávio is an inspiring team leader. His active participation in meetings and contagious energy always boosted the team, facilitating collaborative and effective decision-making."
          />
          <SingleRecommendation
            name="Juliana Goia"
            avatar="https://media.licdn.com/dms/image/D4D03AQHvSntlzMUlpQ/profile-displayphoto-shrink_800_800/0/1708268156011?e=1717632000&v=beta&t=DOqQtcOfq_P_Fi79FFlE855-BtMYJJYG6zMcp_BLpNk"
            linkedin="https://www.linkedin.com/in/juliana-goia/"
            review="We studied and worked together, and both as a study colleague and as a coworker, Flávio demonstrated his ability to collaborate effectively on team projects. His focused attitude and willingness to listen to new ideas contributed with insightful inputs towards an efficient collaborative effort."
          />
          <SingleRecommendation
            name="Eduardo Vinícius"
            avatar="https://media.licdn.com/dms/image/D4D03AQEekuJUKEWJHQ/profile-displayphoto-shrink_800_800/0/1710204704147?e=1717632000&v=beta&t=zPhN1dnxzcDKzs9oTIGUq1wA6aD9FyrCagudDZkZoUY"
            linkedin="https://www.linkedin.com/in/eduardoviniciusbds/"
            review="We worked on projects together in college. Flávio showcased exceptional dedication and technical skills."
          />
          <SingleRecommendation
            name="Beatriz Andrade"
            avatar="https://media.licdn.com/dms/image/D4D03AQHUD7VPIp6p3g/profile-displayphoto-shrink_800_800/0/1663602791325?e=1717632000&v=beta&t=Nc8FtKHTlaY9jqu_mV1XHxyv6yrZmmZQ7pBUxkfnTvo"
            linkedin="https://www.linkedin.com/in/beatriz-andrade-763b34180/"
            review="Flávio excelled in our college projects, showcasing strong teamwork and leadership qualities. His collaborative approach and ability to inspire made him a valuable asset to our team."
          />
          <SingleRecommendation
            name="Rafael de Abreu"
            avatar="https://media.licdn.com/dms/image/D4D03AQFnqZDVAkxPaQ/profile-displayphoto-shrink_800_800/0/1698609006574?e=1717632000&v=beta&t=woxLyTqcjvoZrA9Sp9hFGDuCTtccmBbwXGs9HgNU6k8"
            linkedin="https://www.linkedin.com/in/rafaeldeabreuferreira/"
            review="I had the opportunity to work with Flávio, a talented Front-End developer, proficient in Vue.js, Nuxt.js, React.js, JavaScript, HTML, CSS, SASS, Bootstrap, among others. Flávio stands out for his adaptability and quick learning ability, enabling him to tackle new challenges efficiently."
          />
        </div>
      </section>
    </>
  );
}
