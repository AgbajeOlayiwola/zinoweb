import React from "react";
import styles from "./styles.module.css";

const SecondButton = ({
  type,
  text,
  onclick,
}: {
  type: any;
  text: string;
  onclick: any;
}) => {
  return (
    <button className={styles.firstBtn} onClick={onclick} type={type}>
      {text}
    </button>
  );
};

export default SecondButton;
