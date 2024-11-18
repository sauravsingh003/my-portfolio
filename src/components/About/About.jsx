import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <div className={styles.aboutItemText}>
            <h3>
              Hi! I'm Saurav Singh, recently graduate engineer with a strong
              foundation in programming languages like Java and JavaScipt. I'm
              proficient in DSA and software engineering principles.
            </h3>
            <h3>
              I have hands-on experience with technologies like Java, HTML, CSS,
              JavaScript, React, and databases such as MySQL and MongoDB. I
              enjoy bridging the gap between front-end aesthetics and back-end
              functionality to create seamless user experiences.
            </h3>
            <h3>
              I thrive on solving complex problems and constantly strive to
              learn new tools and technologies to stay ahead in this
              ever-evolving field.
            </h3>
            <h3>
              I'm eager to apply my skills and knowledge in a real-world
              projects and learn from experienced professionals. I'm looking for
              an opportunity to grow and develop as a software developer and
              contribute to innovative projects.
            </h3>
            <h3>
              Feel free to check out my work below or reach out—I'd love to
              collaborate on your next project!
            </h3>
          </div>
        </ul>
      </div>
    </section>
  );
};
