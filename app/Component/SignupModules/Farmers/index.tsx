"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import StepOne from "./OnboardingSteps/StepOne";
import StepTwo from "./OnboardingSteps/StepTwo";
import StepThree from "./OnboardingSteps/StepThree";
import StepFour from "./OnboardingSteps/StepFour";
import StepFive from "./OnboardingSteps/StepFive";
import OtpStep from "./OnboardingSteps/OtpStep";

const Farmers = () => {
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
        return <StepThree step={trackSpot} nextStep={() => setTrackSpot(6)} />;
      case 6:
        return <StepFour step={trackSpot} />;
      case 7:
        return <StepFive step={trackSpot} />;
    }
  };
  return (
    <div className={styles.coverInputs}>
      <div>{steps()}</div>
      <div></div>
    </div>
  );
};

export default Farmers;
