"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Movingh1 = () => {
  const [moveSpan, setMoveSpan] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle between class names
      setMoveSpan((prev) => !prev);
    }, 5000); // Change class every 1000ms (1 second)

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);
  return (
    <h1 className={styles.toph1}>
      Connecting{" "}
      <span className={moveSpan ? "" : styles.highlight}>farmers</span>,{" "}
      <span className={moveSpan ? styles.highlight : ""}>merchants</span> and{" "}
      <span className={moveSpan ? "" : styles.highlight}>agents</span> all under
      one platform
    </h1>
  );
};

export default Movingh1;
