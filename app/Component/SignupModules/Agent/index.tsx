"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import StepOne from "./StepOne";
import StepTwo from "../Farmers/OnboardingSteps/StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const Agents = () => {
  const [trackSpot, setTrackSpot] = useState<Number>(5);
  const steps = () => {
    switch (trackSpot) {
      case 2:
        return <StepOne step={trackSpot} />;
      case 3:
        // return <StepTwo step={trackSpot} />;
        return <StepOne step={trackSpot} />;
      case 4:
        return <StepThree step={trackSpot} />;
      case 5:
        return <StepFour step={trackSpot} />;
    }
  };
  return (
    <div className={styles.coverInputs}>
      <div>{steps()}</div>
      <div></div>
    </div>
  );
};

export default Agents;
