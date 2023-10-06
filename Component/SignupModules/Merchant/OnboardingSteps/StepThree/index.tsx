"use client";
import Inputs from "@/Component/Input";
import React, { useState, useMemo, useEffect } from "react";
import styles from "../../styles.module.css";
import Onboarding from "@/Component/Layout/Onboarding";
import FirstButton from "@/Component/Buttons/firstButton";
import ToggleComponent from "@/Component/ToggleComponent";
import Select from "@/Component/Select";
import { nationality } from "@/utils/data";
import InputFile from "@/Component/InputFile/indx";
import PulsCircleSvg from "@/Component/SVGS/pulsCircleSvg";

import Location from "@/Component/Location";
import SolarCamera from "@/Component/SVGS/solarCamera";
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
        <div className={styles.onBoardingLayout}>
          <div>
            <Select label="Type of Identification" dataSet={nationality} />
            <br />
            <br />
            <Inputs
              type="text"
              label=" ID Number"
              placeholder="Type here...."
            />
            <br />
            <br />
            <Inputs type="date" label="Date of Birth" placeholder="Choose..." />
            <br />
            <br />
            <Inputs type="text" label="NIN" placeholder="Type here...." />
            <br />
            <br />
            <Inputs type="text" label="BVN" placeholder="Type here...." />
            <br />
            <br />
            <Inputs
              type="text"
              label="Tax identification Number"
              placeholder="Type here...."
            />
            <br />
            <br />
            <InputFile
              label="Supporting Document"
              disclaimer=""
              onChange={handleFileChange}
              icon={<SolarCamera />}
              uploadLabel="Upload ID"
            />
            <br />
            <br />
            <InputFile
              label="Identification Card Photo"
              disclaimer=""
              onChange={handleFileChange}
              icon={<SolarCamera />}
              uploadLabel="Upload ID"
            />
            <br />
            <br />
          </div>
          <FirstButton type="Submit" text="Continue" />
        </div>
      </Onboarding>
    </div>
  );
};

export default StepThree;
