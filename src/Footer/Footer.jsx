import React from "react";
import styles from "./Footer.module.scss";
import global from "../Global.module.scss";
import youtubeLogo from "../img/youtube.png";
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.png";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={global.container}>
            <div className={styles.footer__topSocial}>
              <img src={youtubeLogo} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={global.container}>
            <p className={styles.footer__bottomText}>f&b ® 2020</p>
          </div>
        </div>
      </footer>
    </>
  );
}
