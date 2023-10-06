"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const ToggleComponent = ({
  value,
  toggleLabel,
  no,
  yes,
  action,
  hasTextField,
  onchange,
  name,
  placeholder,
  onclick,
}: {
  value?: any;
  toggleLabel?: any;
  yes?: string;
  no?: string;
  action?: any;
  hasTextField?: boolean;
  onchange?: any;
  name?: any;
  placeholder?: any;
  onclick?: any;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked), action();
    onclick();
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
          placeholder={placeholder}
          onChange={onchange}
          value={value}
          type="text"
          name={name}
        />
      ) : null}
    </div>
  );
};

export default ToggleComponent;
