import React from "react";
import styles from "./styles.module.css";

const SingleCore = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className={styles.singleCoreCont}>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

export default SingleCore;
