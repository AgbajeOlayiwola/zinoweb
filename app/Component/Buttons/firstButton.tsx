import React from "react";
import styles from "./firstMobile.module.css";

const FirstButton = ({ type, text }: { type: any; text: string }) => {
  return (
    <button className={styles.firstBtn} type={type}>
      {text}
    </button>
  );
};

export default FirstButton;
