import React from "react";

import { FiExternalLink } from "react-icons/fi"; 
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
      <div className={styles.titleRow}>
        <h3 className={styles.title}>{title}
        <a
          href={link}
          className={styles.iconLink}
          title="Certificate Link" 
        >
          <FiExternalLink size={20} />
        </a>
        </h3>
      </div>
      <p className={styles.description}>{description}</p>
      {/* <a href={link} className={styles.contactBtn}>
        Certificate Link
      </a> */}
    </div>
  );
};
