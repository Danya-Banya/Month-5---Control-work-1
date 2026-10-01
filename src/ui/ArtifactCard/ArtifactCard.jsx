import React from "react";
import styles from "./ArtifactCard.module.scss";

export default function ArtifactCard({
  title,
  raiting,
  description,
  image,
}) {
  return (
    <>
      <div className={styles.artifactCard}>
        <div className={styles.artifactCard__top}>
          <div className={styles.artifactCard__rating}>{raiting}</div>
          <img src={image} alt="" />
        </div>
        <div className={styles.artifactCard__content}>
          <h3 className={styles.artifactCard__title}>{title}</h3>
          <p className={styles.artifactCard__description}>{description}</p>
          <button className={styles.artifactCard__button}>Подробнее</button>
        </div>
      </div>
    </>
  );
}
