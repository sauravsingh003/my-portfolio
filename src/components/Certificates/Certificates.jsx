import React from "react";

import styles from "./Certificate.module.css";

import certificates from "../../data/certificate.json";
import { CertificateCard } from "./CertificateCard";

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificate">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.certificates}>
        {certificates.map((certificate, id) => {
          return <CertificateCard key={id} certificate={certificate} />;
        })}
      </div>
    </section>
  );
};
