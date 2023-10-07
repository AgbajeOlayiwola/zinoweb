"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import Inputs from "@/Component/Input";
import Select from "@/Component/Select";
import { identification, nationality } from "@/utils/data";
import React, { useState } from "react";
import styles from "../../styles.module.css";
import InputFile from "@/Component/InputFile/indx";
import Link from "next/link";
import Already from "@/Component/SmallComponents/Already";
import Onboarding from "@/Component/Layout/Onboarding";
import SolarCamera from "@/Component/SVGS/solarCamera";

const StepTwo = ({ step }: { step: any }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileUpload = (file: any) => {
    // Handle the file upload here, e.g., send it to a server
    setSelectedFile(file);
  };

  return (
    <div>
      <Onboarding steps={step}>
        {/* <div className={styles.onBoardingLayout}>
          <div>
            <Inputs
              type="text"
              label=" Business Name"
              placeholder="Enter Your full name here...."
            />
            <br />
            <br />

            <Inputs
              type="text"
              label="Business Registration Number"
              placeholder="Enter Your other names here...."
            />
            <br />
            <br />
            <Select label="Business Type" dataSet={nationality} />
            <br />
            <br />
            <Inputs type="date" label="Date of Birth" placeholder="Choose..." />
            <br />
            <br />
            <Inputs
              type="text"
              label="Business Address"
              placeholder="Enter Your other names here...."
            />
            <br />
            <br />
            <Inputs
              type="text"
              label="Business Email Address"
              placeholder="Enter Your other names here...."
            />
            <br />
            <br />
            <Inputs
              type="text"
              label="Business Website (optional)"
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

export default StepTwo;
