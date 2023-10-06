import React, { useState } from "react";
import styles from "./styles.module.css";
import StepOne from "./OnboardingSteps/StepOne";
import StepTwo from "./OnboardingSteps/StepTwo";
import StepThree from "./OnboardingSteps/StepThree";
import StepFour from "./OnboardingSteps/StepFour";
import StepFive from "./OnboardingSteps/StepFive";

const Merchant = () => {
  const [trackSpot, setTrackSpot] = useState<Number>(5);
  const steps = () => {
    switch (trackSpot) {
      case 2:
        return <StepOne step={trackSpot} />;
      case 3:
        return <StepTwo step={trackSpot} />;
      case 4:
        return <StepThree step={trackSpot} />;
      case 5:
        return <StepFour step={trackSpot} />;
      case 6:
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

export default Merchant;
