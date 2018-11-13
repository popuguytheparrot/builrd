import React from "react";
import styles from "./Description.scss";

export function Description({ description }) {
  return <p className={styles.description}>{description}</p>;
}
