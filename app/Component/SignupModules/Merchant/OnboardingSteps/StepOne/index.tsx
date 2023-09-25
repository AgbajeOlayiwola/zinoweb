import Inputs from "@/app/Component/Input";
import React from "react";
import styles from "../../styles.module.css";
import Select from "@/app/Component/Select";
import FirstButton from "@/app/Component/Buttons/firstButton";
import { gender, nationality } from "@/utils/data";
import Already from "@/app/Component/SmallComponents/Already";
import Onboarding from "@/app/Component/Layout/Onboarding";

const StepOne = ({ step }: { step: any }) => {
  return (
    <div>
      <Onboarding steps={step}>
        {/* <div className={styles.onBoardingLayout}>
          <div>
            <Inputs
              type="text"
              label="Surname"
              placeholder="Enter Your full name here...."
            />
            <br />
            <Inputs
              type="text"
              label="Other Names"
              placeholder="Enter Your other names here...."
            />
            <br />
            <div className={styles.flex}>
              <Inputs type="number" label="Phone Number" placeholder="Enter" />

              <Select label="Gender" dataSet={gender} />
            </div>
            <br />
            <Inputs
              type="text"
              label="Email Address"
              placeholder="Enter Your Email Address here...."
            />
            <br />
            <Inputs
              type="password"
              label="Password"
              placeholder="Enter your password here"
            />
            <br />
            <div className={styles.flex}>
              <Inputs
                type="date"
                label="Date of Birth"
                placeholder="Choose..."
              />
              <Select label="Nationality" dataSet={nationality} />
            </div>
            <br />
            <Inputs
              type="text"
              label="Residential Address"
              placeholder="Enter Your other names here...."
            />
            <br />
            <br />
          </div>
          <FirstButton action={()=>{}}type="Submit" text="Continue" />
        </div> */}
      </Onboarding>
    </div>
  );
};

export default StepOne;
