import React from "react";
import globalStyles from "../Global.module.scss";
import styles from "./NewArtifacts.module.scss";
import newArtifactsImage from "../img/ArtifactsBg.png";
import arrow from "../img/arrow.png"
export default function NewArtifacts() {
  return (
    <>
      <section className={styles.newArtifacts}>
        <div className={globalStyles.container}>
          <h1 className={styles.newArtifacts__title}>Новые артефакты</h1>
          <div className={styles.newArtifacts__item}>
            <img
              src={newArtifactsImage}
              className={styles.newArtifacts__image}
              alt=""
            />
            <div className={styles.newArtifacts__content}>
              <h3 className={styles.newArtifacts__contentTitle}>
                Kurische Nehrung 24
              </h3>
              <p className={styles.newArtifacts__description}>
                Вот вам яркий пример современных тенденций - начало повседневной
                работы по формированию позиции выявляет срочную потребность
                методов управления процессами. <br /> <br /> Есть над чем
                задуматься: представители современных социальных резервов
                своевременно верифицированы.
              </p>
              <div className={styles.newArtifacts__read}>
                <h2 className={styles.newArtifacts__readText}>Читать далее</h2>
                <img src={arrow} className={styles.newArtifacts__arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
