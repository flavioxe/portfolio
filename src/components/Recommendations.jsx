import { useTranslation } from "react-i18next";
import styles from "./Recommendations.module.scss";
import { SingleRecommendation } from "./SingleRecommendation";

export function Recommendations() {
  const { t } = useTranslation();

  return (
    <>
      <section className={`${styles.recommendationsWrapper}`}>
        <div className={`${styles.recommendationsAnimation}`}>
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://github.com/MRonald.png"
            linkedin="#"
            review={`${t("michael")}`}
          />
          <SingleRecommendation
            name="Juliana Goia"
            avatar="https://media.licdn.com/dms/image/D4D03AQHvSntlzMUlpQ/profile-displayphoto-shrink_800_800/0/1708268156011?e=1717632000&v=beta&t=DOqQtcOfq_P_Fi79FFlE855-BtMYJJYG6zMcp_BLpNk"
            linkedin="https://www.linkedin.com/in/juliana-goia/"
            review={`${t("juliana")}`}
          />
          <SingleRecommendation
            name="Eduardo Vinícius"
            avatar="https://media.licdn.com/dms/image/D4D03AQEekuJUKEWJHQ/profile-displayphoto-shrink_800_800/0/1710204704147?e=1717632000&v=beta&t=zPhN1dnxzcDKzs9oTIGUq1wA6aD9FyrCagudDZkZoUY"
            linkedin="https://www.linkedin.com/in/eduardoviniciusbds/"
            review={`${t("eduardo")}`}
          />
          <SingleRecommendation
            name="Beatriz Andrade"
            avatar="https://media.licdn.com/dms/image/D4D03AQHUD7VPIp6p3g/profile-displayphoto-shrink_800_800/0/1663602791325?e=1717632000&v=beta&t=Nc8FtKHTlaY9jqu_mV1XHxyv6yrZmmZQ7pBUxkfnTvo"
            linkedin="https://www.linkedin.com/in/beatriz-andrade-763b34180/"
            review={`${t("beatriz")}`}
          />
          <SingleRecommendation
            name="Rafael de Abreu"
            avatar="https://media.licdn.com/dms/image/D4D03AQFnqZDVAkxPaQ/profile-displayphoto-shrink_800_800/0/1698609006574?e=1717632000&v=beta&t=woxLyTqcjvoZrA9Sp9hFGDuCTtccmBbwXGs9HgNU6k8"
            linkedin="https://www.linkedin.com/in/rafaeldeabreuferreira/"
            review={`${t("rafael")}`}
          />
        </div>
      </section>
    </>
  );
}
