"use client";
import FirstButton from "@/app/Component/Buttons/firstButton";
import Inputs from "@/app/Component/Input";
import Select from "@/app/Component/Select";
import { identification, nationality } from "@/utils/data";
import React, { useState } from "react";
import styles from "../../styles.module.css";
import InputFile from "@/app/Component/InputFile/indx";
import Link from "next/link";
import Already from "@/app/Component/SmallComponents/Already";
import Onboarding from "@/app/Component/Layout/Onboarding";
import SolarCamera from "@/app/Component/SVGS/solarCamera";

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
