import React from "react";
import styles from "./styles.module.css";
import bg from "../../../public/images/subscribe-img.png";

const Subscribe = () => {
  const styling = {
    backgroundImage: `url('${bg.src}')`,
    margin: "0px auto",
    padding: "98px 0px",
    backgroundRepeat: "no-repeat",
    width: "82%",
    maxWidth: "1174px",
  };
  return (
    <div className={styles.subscribeContainer} style={styling}>
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
