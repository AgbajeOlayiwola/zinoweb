"use client";
import Inputs from "@/app/Component/Input";
import React, { useState, useMemo, useEffect } from "react";
import styles from "../styles.module.css";
import Onboarding from "@/app/Component/Layout/Onboarding";
import FirstButton from "@/app/Component/Buttons/firstButton";
import ToggleComponent from "@/app/Component/ToggleComponent";
import Select from "@/app/Component/Select";
import { nationality } from "@/utils/data";
import InputFile from "@/app/Component/InputFile/indx";
import PulsCircleSvg from "@/app/Component/SVGS/pulsCircleSvg";

import Location from "@/app/Component/Location";
const StepThree = ({ step }: { step: any }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <Onboarding steps={step}>
        {/* <div className={styles.onBoardingLayout}>
          <div>
            <Inputs
              type="text"
              label="Residential Address"
              placeholder="Type here...."
            />
            <br />
            <br />
            <InputFile
              label="Proof of Residence "
              disclaimer="(Utility bill etc)"
              onChange={handleFileChange}
              icon={<PulsCircleSvg />}
              uploadLabel="Add file"
            />
            <br />
            <br />
          </div>
          <FirstButton action={()=>{}}type="Submit" text="Continue" />
          <div className={styles.skip}>
            <p>Skip</p>
          </div>
        </div> */}
      </Onboarding>
    </div>
  );
};

export default StepThree;
