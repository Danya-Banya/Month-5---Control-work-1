import React from "react";
import styles from "./Header.module.scss";
import Logo from "../img/Logo (1).png";
import searchButton from "../img/search (1).png";
import logInButton from "../img/log-in.png";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__item}>
          <div className={styles["header__item--other"]}>
            <div className="header__item--logo">
              <img src={Logo} alt="" />
            </div>
            <nav className={styles["header__item--nav"]}>
              <a className={styles.header__itemLink}>Каталог</a>
              <a className={styles.header__itemLink}>Галерея</a>
              <a className={styles.header__itemLink}>О лаборатории</a>
              <a className={styles.header__itemLink}>Контакты</a>
            </nav>
          </div>

          <div className={styles["header__item--navButtons"]}>
            <img
              src={searchButton}
              className={styles["header__item--img"]}
              alt=""
            />
            <img
              src={logInButton}
              className={styles["header__item--img"]}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}
