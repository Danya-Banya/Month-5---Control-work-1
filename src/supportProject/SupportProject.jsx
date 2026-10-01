import React from "react";
import styles from "./SupportProject.module.scss";
import globalStyles from "../Global.module.scss";

export default function supportProject() {
  return (
    <>
      <section className={styles.supportProject}>
        <div className={globalStyles.container}>
          <div className={styles.supportProject__item}>
            <h2 className={styles.supportProject__title}>Помочь проекту</h2>
            <p className={styles.supportProject__description}>
              Равным образом, экономическая повестка сегодняшнего дня не даёт
              нам иного выбора, кроме определения прогресса профессионального
              сообщества. Как принято считать, элементы политического процесса
              рассмотрены исключительно в разрезе маркетинговых и финансовых
              предпосылок.
            </p>
            <form className={styles.supportProject__form}>
              <input type="text" className={styles.supportProject__input}  placeholder="Имя"/>
              <input type="email" className={styles.supportProject__input} placeholder="Email"/>
              <button className={styles.supportProject__button}>Отправить</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
