import React from "react";

import styles from "./CertificateCard.module.css";
import { getImageUrl } from "../../utils";

export const CertificateCard = ({
  certificate: { title, imageSrc, description, link },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.contactBtn}>
        Certificate Link
      </a>
    </div>
  );
};
