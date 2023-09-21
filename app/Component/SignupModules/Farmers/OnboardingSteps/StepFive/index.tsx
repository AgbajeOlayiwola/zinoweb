"use client";
import FirstButton from "@/app/Component/Buttons/firstButton";
import Inputs from "@/app/Component/Input";
import InputFile from "@/app/Component/InputFile/indx";
import Onboarding from "@/app/Component/Layout/Onboarding";
import Select from "@/app/Component/Select";
import ToggleComponent from "@/app/Component/ToggleComponent";
import { nationality } from "@/utils/data";
import React, { useState } from "react";
import styles from "../../styles.module.css";

const StepFive = ({ step }: { step: any }) => {
  const [dynamicForm, setDynamicForm] = useState(true);
  const move = () => {
    setDynamicForm(!dynamicForm);
  };
  return (
    <Onboarding steps={step}>
      <div className={styles.onBoardingLayout}>
        <div>
          <div className={styles.onBoardingLayout}>
            <div>
              <Select
                label="Years of Farming Experience"
                dataSet={nationality}
              />
              <br />
              <br />
              <ToggleComponent
                toggleLabel="Do you own the Land"
                no="No"
                yes="Yes"
                action={move}
              />
              <br />
              <br />
              {dynamicForm ? null : (
                <>
                  <Inputs
                    type="text"
                    label="Surname"
                    placeholder="Address of Cooperative Group"
                  />
                  <br />
                  <br />
                </>
              )}
            </div>
          </div>
          <FirstButton type="Submit" text="Continue" />
        </div>
      </div>
    </Onboarding>
  );
};

export default StepFive;
