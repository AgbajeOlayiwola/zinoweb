import React, { useState } from "react";
import styles from "./styles.module.css";
import StepOne from "./OnboardingSteps/StepOne";
import StepTwo from "./OnboardingSteps/StepTwo";
import StepThree from "./OnboardingSteps/StepThree";
import StepFour from "./OnboardingSteps/StepFour";
import StepFive from "./OnboardingSteps/StepFive";

const Merchant = () => {
  const [trackSpot, setTrackSpot] = useState<Number>(2);
  const steps = () => {
    switch (trackSpot) {
      case 2:
        return <StepOne step={trackSpot} nextStep={() => setTrackSpot(3)} />;
      case 3:
        return <StepTwo step={trackSpot} nextStep={() => setTrackSpot(4)} />;
      case 4:
        return <StepThree step={trackSpot} nextStep={() => setTrackSpot(5)} />;
      case 5:
        return <StepFour step={trackSpot} nextStep={() => setTrackSpot(6)} />;
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
