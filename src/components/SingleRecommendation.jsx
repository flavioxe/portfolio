import styles from "./Recommendations.module.scss";

export function SingleRecommendation({ name, avatar, linkedin, review }) {
  return (
    <>
      <main className={`${styles.recommendationBox} d-flex flex-column`}>
        <aisde className={`${styles.recommendationBoxHeader} d-flex`}>
          <img
            src={`${avatar}`}
            alt="Friend avatar"
            className={`${styles.recommendationAvatar}`}
          />
          <div
            className={`${styles.recommendationBoxName} d-flex align-items-center`}
          >
            <p>
              <strong> {name} </strong>
            </p>
            <a
              href={`${linkedin}`}
              target="_blank"
              className={`${styles.recommendationLinkein} d-flex align-items-center justify-content-center`}
            >
              in
            </a>
          </div>
        </aisde>

        <span>{review}</span>
      </main>
    </>
  );
}
