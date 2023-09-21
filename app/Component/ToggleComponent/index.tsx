"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const ToggleComponent = ({
  toggleLabel,
  no,
  yes,
  action,
  hasTextField,
  onchange,
  name,
}: {
  toggleLabel: any;
  yes: string;
  no: string;
  action: any;
  hasTextField: boolean;
  onchange: any;
  name: any;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked), action();
  };

  return (
    <div className={styles.toggleBox}>
      <div>
        <p>{toggleLabel}</p>
        <div className={styles.noYes}>
          {no === "" ? <></> : <p>{no}</p>}
          <div
            className={`${styles.toggleSwitch} ${
              isChecked ? styles.on : styles.off
            }`}
            onClick={toggleSwitch}
          >
            <div className={styles.slider}></div>
          </div>
          {no === "" ? <></> : <p>{yes}</p>}
          <br />
        </div>
      </div>
      {hasTextField ? (
        <input
          className={styles.checkBoxText}
          placeholder="CAC Registeration Number"
          onChange={onchange}
          type="text"
          name={name}
        />
      ) : null}
    </div>
  );
};

export default ToggleComponent;
