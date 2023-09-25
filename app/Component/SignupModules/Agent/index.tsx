"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import OtpStep from "./OtpStep";
import StepTwo from "./StepTwo";

const Agents = () => {
  const [trackSpot, setTrackSpot] = useState<Number>(5);
  const steps = () => {
    switch (trackSpot) {
      case 2:
        return <StepOne step={trackSpot} nextStep={() => setTrackSpot(3)} />;
      case 3:
        return <OtpStep step={trackSpot} nextStep={() => setTrackSpot(4)} />;
      case 4:
        return <StepTwo step={trackSpot} nextStep={() => setTrackSpot(5)} />;
      case 5:
        return <StepThree step={trackSpot} />;
      case 6:
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
