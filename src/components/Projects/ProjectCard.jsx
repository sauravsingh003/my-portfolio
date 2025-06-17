import React from "react";

import { FiExternalLink } from "react-icons/fi"; 
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, link } }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.titleRow}>
        <h3 className={styles.title}>{title}</h3>
        <a
          href={link}
          className={styles.iconLink}
          title="View GitHub Repo"
        >
          <FiExternalLink size={20} />
        </a>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
