import React from "react";
import styles from "./styles.module.css";

const GetStarted = () => {
  return (
    <div className={styles.getStarted} id="demo">
      <div className={styles.getStartedHeader}>
        <h2>Get Started with ZINO </h2>
        <p>Watch how to create your Zino account in simple and easy steps</p>
      </div>
      <div className={styles.vid}>
        <video controls width="950" className="w-2/3 h-full aspect-square object-cover rounded-xl ">
          <source src={"/How_to_join_zino.mp4"} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default GetStarted;
