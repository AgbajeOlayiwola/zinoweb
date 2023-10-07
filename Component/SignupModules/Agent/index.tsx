"use client";
import OtpStep from "@/Component/OtpStep";
import { useState } from "react";
import ConfirmPin from "../../ConfirmPin";
import VirtualAccount from "../../VirtualAccount";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import styles from "./styles.module.css";

const Agents = () => {
  const [trackSpot, setTrackSpot] = useState<Number>(3);
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
        return <StepFour step={trackSpot} nextStep={() => setTrackSpot(7)} />;
      case 7:
        return (
          <VirtualAccount step={trackSpot} nextStep={() => setTrackSpot(8)} />
        );
      case 8:
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

export default Agents;
