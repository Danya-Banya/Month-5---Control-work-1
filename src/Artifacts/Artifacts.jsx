import React from "react";
import styles from "./Artifacts.module.scss";
import globalStyles from "../Global.module.scss";
import ArtifactCard from "../ui/ArtifactCard/ArtifactCard";
import { cardInfo } from "../untils.js";

export default function Artifacts() {
  return (
    <>
      <section className={styles.artifacts}>
        <div className={globalStyles.container}>
          <div className={styles.artifacts__item}>
            {cardInfo.map((until) => (
              <ArtifactCard
              key={until.title}
                title={until.title}
                raiting={until.raiting}
                description={until.description}
                image={until.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
