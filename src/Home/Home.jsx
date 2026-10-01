import React from "react";
import styles from "./Home.module.scss";
import globalStyles from "../Global.module.scss";
import greenArrow from "../img/greenArrow.png";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={globalStyles.container}>
          <div className={styles.home__item}>
            <h1 className={styles.home__itemTitle}>
              Крупнейшая коллекция природных артефактов
            </h1>
            <p className={styles.home__itemDescription}>
              Являясь всего лишь частью общей картины, интерактивные прототипы,
              которые представляют собой яркий пример европейского типа
              политической и социальной культуры.
            </p>
            <div className={styles.home__itemExplore}>
              Исследовать <img src={greenArrow} className={styles.home__itemArrow} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
