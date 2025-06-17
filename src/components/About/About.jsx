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
              Hi! I'm Saurav Singh, a engineering graduate currently pursuing PG-DAC from CDAC, Bangalore. I have completed my graduation in Electronics and Communication Engineering from University Institute of Engineering and Technology, Kurukshetra University, Kurukshetra. I have a strong foundation in programming languages like Java, C++ and JavaScript with a deep understanding of data structures and algorithms, which I've been practicing for a long time.
            </h3>
            <h3>
              I'm proficient in software engineering principles and have hands-on experience with technologies such as Java, C++, HTML, CSS, JavaScript, React.js, SpringBoot, Node.js, Express.js, and databases like MySQL and MongoDB—making me confident in working with the full stack development.
            </h3>
            <h3>
              I enjoy bridging the gap between front-end design and back-end functionality to create seamless and efficient user experiences.
            </h3>
            <h3>
              I'm passionate about solving complex problems and continuously learning new tools and technologies to stay ahead in this ever-evolving field.
            </h3>
            <h3>
              I'm eager to apply my skills in real-world projects, learn from experienced professionals, and grow as a software developer while contributing to innovative solutions.
            </h3>
            <h3>
              Feel free to check out my work below or reach out—I'd love to collaborate on your next project!
            </h3>
          </div>
        </ul>
      </div>
    </section>
  );
};
