import React from "react";
import styles from "./styles.module.css";
import Already from "../../SmallComponents/Already";

const Onboarding = ({ steps, children }: { steps: any; children: any }) => {
  return (
    <div>
      <div>
        <div className={styles.cstepsCrea}>
          <div>
            <h1>Create Account</h1>
          </div>
          <p>STEP {steps} of 6</p>
        </div>
        {steps !== "3" ? (
          <>
            <p className={styles.hello}>Hello, tell us about you?</p>
            <p className={styles.kind}>
              Kindly fill in your personal information, in order to know you
              more
            </p>
          </>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default Onboarding;
