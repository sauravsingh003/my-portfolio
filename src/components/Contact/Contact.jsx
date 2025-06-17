import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Info</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone icon" />
          <a>+91-7027562722</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a>sauravchauhan0017@gmail.com</a>
        </li>
        {/* <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/saurav-singh-348694246/">
            linkedin.com/sauravsingh
          </a>
        </li>
         <li className={styles.link}>
          <img
            src={getImageUrl("contact/leetcode.png")}
            alt="Leetcode icon"
          />
          <a href="https://leetcode.com/u/sauravrajputt_/">
            leetcode.com/sauravsingh
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sauravsingh003">github.com/sauravsingh</a>
        </li> */}


        <div className={styles.iconRow}>
  <a href="https://www.linkedin.com/in/saurav-singh-348694246/">
    <img src={getImageUrl("contact/linkedin.svg")} alt="LinkedIn" />
  </a>
  <a href="https://leetcode.com/u/sauravrajputt_/">
    <img src={getImageUrl("contact/leetcode.svg")} alt="LeetCode" />
  </a>
  <a href="https://github.com/sauravsingh003">
    <img src={getImageUrl("contact/github.svg")} alt="GitHub" />
  </a>
</div>




      </ul>
    </footer>
  );
};
