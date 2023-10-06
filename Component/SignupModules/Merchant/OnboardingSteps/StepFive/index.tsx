import FirstButton from "@/Component/Buttons/firstButton";
import InputFile from "@/Component/InputFile/indx";
import Onboarding from "@/Component/Layout/Onboarding";
import PulsCircleSvg from "@/Component/SVGS/pulsCircleSvg";
import Select from "@/Component/Select";
import ToggleComponent from "@/Component/ToggleComponent";
import { nationality } from "@/utils/data";
import React, { useState } from "react";
import styles from "../../styles.module.css";
import Inputs from "@/Component/Input";
const StepFour = ({ step }: { step: any }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Onboarding steps={step}>
      <div className={styles.onBoardingLayout}>
        <div>
          <Inputs
            type="text"
            label="Residential Address"
            placeholder="Text here...."
          />
          <br />
          <br />

          <InputFile
            label="Proof of Residence"
            disclaimer=" (Utility bill etc)"
            onChange={handleFileChange}
            icon={<PulsCircleSvg />}
            uploadLabel="Add file"
          />
          <br />
          <br />
          <Select
            label="Responsible Zino Experience Center (ZEC)"
            dataSet={nationality}
          />
          <br />
          <br />
        </div>
        <FirstButton type="Submit" text="Continue" />
      </div>
    </Onboarding>
  );
};

export default StepFour;
