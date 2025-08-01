import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import CV from "../../../assets/cv.pdf";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saurav Singh</h1>
        <p className={styles.description}>
          I am a full-stack developer, seeking opportunities to apply my skills
          in innovative tech environment.
        </p>
        <a href={CV} className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
