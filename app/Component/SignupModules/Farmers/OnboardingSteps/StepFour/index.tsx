import FirstButton from "@/app/Component/Buttons/firstButton";
import InputFile from "@/app/Component/InputFile/indx";
import Onboarding from "@/app/Component/Layout/Onboarding";
import PulsCircleSvg from "@/app/Component/SVGS/pulsCircleSvg";
import Select from "@/app/Component/Select";
import ToggleComponent from "@/app/Component/ToggleComponent";
import { nationality } from "@/utils/data";
import React, { useState } from "react";
import styles from "../../styles.module.css";
const StepFour = ({ step }: { step: any }) => {
  const [dynamicForm, setDynamicForm] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileUpload = (file: any) => {
    // Handle the file upload here, e.g., send it to a server
    setSelectedFile(file);
  };
  const move = () => {
    setDynamicForm(!dynamicForm);
  };
  return (
    <Onboarding steps={step}>
      <div className={styles.onBoardingLayout}>
        <div>
          <ToggleComponent
            toggleLabel="Do you own the Land"
            no="No"
            yes="Yes"
            action={move}
          />
          <br />
          <br />
          {dynamicForm ? (
            <Select label="Type of Land Use Agreement" dataSet={nationality} />
          ) : (
            <InputFile
              label="Supporting Documents"
              disclaimer=""
              onChange={handleFileUpload}
              icon={<PulsCircleSvg />}
              uploadLabel="Upload ID"
            />
          )}
          <br />
          <br />
        </div>
        <FirstButton type="Submit" text="Continue" />
      </div>
    </Onboarding>
  );
};

export default StepFour;
