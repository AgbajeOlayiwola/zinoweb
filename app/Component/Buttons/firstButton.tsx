import React from "react";
import styles from "./firstMobile.module.css";

const FirstButton = ({ type, text, action }: { type: any; text: string; action: any }) => {
  return (
    <button className={styles.firstBtn} type={type} onClick={action}>
      {text}
    </button>
  );
};

export default FirstButton;
