import React from "react";
import Inputs from "@/Component/Input";
import styles from "../../styles.module.css";
import Select from "@/Component/Select";
import FirstButton from "@/Component/Buttons/firstButton";
import { gender, nationality } from "@/utils/data";
import Already from "@/Component/SmallComponents/Already";
import Onboarding from "@/Component/Layout/Onboarding";

const StepOne = ({ step, nextStep }: { step: any; nextStep: any }) => {
  return (
    <div>
      <Onboarding steps={step}>
        <form onSubmit={nextStep}>
          <div className={styles.onBoardingLayout}>
            <div className={styles.onboardingBody}>
              <Inputs type="text" label="Surname" placeholder="Enter Your full name here...." />
              <Inputs type="text" label="Other Names" placeholder="Enter Your other names here...." />
              <div className={styles.flex}>
                <Inputs type="number" label="Phone Number" placeholder="Enter" />

                <Select label="Gender" dataSet={gender} />
              </div>
              <Inputs type="text" label="Email Address" placeholder="Enter Your Email Address here...." />
              <Inputs type="password" label="Password" placeholder="Enter your password here" />
              <div className={styles.flex}>
                <Inputs type="date" label="Date of Birth" placeholder="Choose..." />
                <Select label="Nationality" dataSet={nationality} />
              </div>
              <Inputs type="text" label="Residential Address" placeholder="Enter Your other names here...." />
            </div>
            <FirstButton type="Submit" text="Continue" />
          </div>
        </form>
      </Onboarding>
    </div>
  );
};

export default StepOne;
