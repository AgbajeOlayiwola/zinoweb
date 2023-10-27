import React from "react";
import styles from "./styles.module.css";

const Subscribe = () => {
  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.subscribeWrapper}>
        <div className={styles.subscribeHead}>
          <h2>Subscribe to get notified when we launch</h2>
          <p>Be one of the first to know when the product has been launched</p>
        </div>
        <div className={styles.subscribeBody}>
          <form>
            <input type="text" placeholder="Email address" />
            <button>Subscribe Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
