"use client";
import FirstButton from "@/app/Component/Buttons/firstButton";
import Inputs from "@/app/Component/Input";
import InputFile from "@/app/Component/InputFile/indx";
import Onboarding from "@/app/Component/Layout/Onboarding";
import Select from "@/app/Component/Select";
import ToggleComponent from "@/app/Component/ToggleComponent";
import { gender, nationality } from "@/utils/data";
import React, { useState } from "react";
import styles from "../styles.module.css";
import PulsCircleSvg from "@/app/Component/SVGS/pulsCircleSvg";

const StepFive = ({ step }: { step: any }) => {
  const [dynamicForm, setDynamicForm] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const move = () => {
    setDynamicForm(!dynamicForm);
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <Onboarding steps={step}>
      <div className={styles.onBoardingLayout}>
        <div>
          <div className={styles.onBoardingLayout}>
            <div>
              <ToggleComponent
                toggleLabel="Are you a qualified food and agribusiness expert?"
                no="No"
                yes="Yes"
                action={move}
              />
              <br />
              <br />
              <Select
                label="Years of Post-graduation Technical Experience"
                dataSet={gender}
              />
              <br />
              <br />
              <InputFile
                label="Farm Video"
                disclaimer="(360 degree video recording and upload)"
                onChange={handleFileChange}
                icon={<PulsCircleSvg />}
                uploadLabel="Add file"
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
