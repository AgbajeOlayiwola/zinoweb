import FirstButton from "@/Component/Buttons/firstButton";
import InputFile from "@/Component/InputFile/indx";
import Onboarding from "@/Component/Layout/Onboarding";
import PulsCircleSvg from "@/Component/SVGS/pulsCircleSvg";
import Select from "@/Component/Select";
import ToggleComponent from "@/Component/ToggleComponent";
import { nationality } from "@/utils/data";
import React, { useState } from "react";
import styles from "../../styles.module.css";
const StepFour = ({ step }: { step: any }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Onboarding steps={step}>
      {/* <div className={styles.onBoardingLayout}>
        <div>
          <Select
            label="Which aspects are you focused on?"
            dataSet={nationality}
          />
          <br />
          <br />
          <Select
            label="Years of Post-graduation Technical Experience"
            dataSet={nationality}
          />
          <br />
          <br />
          <InputFile
            label="Company Profile Document"
            disclaimer=""
            onChange={handleFileChange}
            icon={<PulsCircleSvg />}
            uploadLabel="Add file"
          />
          <br />
          <br />
        </div>
        <FirstButton action={()=>{}}type="Submit" text="Continue" />
      </div> */}
    </Onboarding>
  );
};

export default StepFour;
