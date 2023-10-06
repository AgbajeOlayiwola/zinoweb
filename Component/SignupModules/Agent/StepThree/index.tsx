"use client";
import Inputs from "@/Component/Input";
import React, { useState, useMemo, useEffect } from "react";
import styles from "../styles.module.css";
import Onboarding from "@/Component/Layout/Onboarding";
import FirstButton from "@/Component/Buttons/firstButton";
import ToggleComponent from "@/Component/ToggleComponent";
import Select from "@/Component/Select";
import { nationality } from "@/utils/data";
import InputFile from "@/Component/InputFile/indx";
import PulsCircleSvg from "@/Component/SVGS/pulsCircleSvg";
import * as yup from "yup";
import Location from "@/Component/Location";
import { useVerifyAgentAddressMutation } from "@/reduxtoolkit/api/mutationApi";
import { Formik } from "formik";
const StepThree = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const [
    verifyAgentAddress,
    {
      data: verifyAgentAddressData,
      isLoading: verifyAgentAddressLoad,
      isSuccess: verifyAgentAddressSuccess,
      isError: verifyAgentAddressFalse,
      error: verifyAgentAddressErr,
      reset: verifyAgentAddressReset,
    },
  ] = useVerifyAgentAddressMutation();

  const initSchema = yup.object().shape({
    address: yup.string(),
  });
  const initialValues = {
    address: "",
  };
  return (
    <div>
      <Onboarding steps={step}>
        <Formik
          validationSchema={initSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            verifyAgentAddress(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.onBoardingLayout}>
                <div>
                  <InputFile
                    name="proofOfResidence"
                    label="Proof of Residence "
                    disclaimer="(Utility bill etc)"
                    onImageUrlChange={(data) => setFieldValue("address", data)}
                    icon={<PulsCircleSvg />}
                    uploadLabel="Add file"
                  />
                  <br />
                  <br />
                </div>
                <FirstButton
                  loads={verifyAgentAddressLoad}
                  type="Submit"
                  text="Continue"
                />
                <div className={styles.skip}>
                  <p>Skip</p>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Onboarding>
    </div>
  );
};

export default StepThree;
