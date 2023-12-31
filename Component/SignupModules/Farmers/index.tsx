"use client";
import ConfirmPin from "@/Component/ConfirmPin";
import OtpStep from "@/Component/OtpStep";
import VirtualAccount from "@/Component/VirtualAccount";
import { useState } from "react";
import StepFive from "./OnboardingSteps/StepFive";
import StepFour from "./OnboardingSteps/StepFour";
import StepOne from "./OnboardingSteps/StepOne";
import StepThree from "./OnboardingSteps/StepThree";
import StepTwo from "./OnboardingSteps/StepTwo";
import styles from "./styles.module.css";

const Farmers = () => {
  const [trackSpot, setTrackSpot] = useState<Number>(2);

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
        return <StepFour step={trackSpot} nextStep={() => setTrackSpot(6)} />;
      case 7:
        return <StepFive step={trackSpot} nextStep={() => setTrackSpot(6)} />;
      case 8:
        return (
          <VirtualAccount step={trackSpot} nextStep={() => setTrackSpot(9)} />
        );
      case 9:
        return <ConfirmPin step={trackSpot} nextStep={() => setTrackSpot(8)} />;
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
