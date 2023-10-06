import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const Already = () => {
  return (
    <div className={styles.already}>
      <p>
        Already have an Account? <Link href="#"> Log In</Link>
      </p>
    </div>
  );
};

export default Already;
