"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import InputFile from "@/Component/InputFile/indx";
import Onboarding from "@/Component/Layout/Onboarding";
import PulsCircleSvg from "@/Component/SVGS/pulsCircleSvg";
import { useVerifyAgentAddressMutation } from "@/reduxtoolkit/api/mutationApi";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import styles from "../styles.module.css";
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
  ]: any = useVerifyAgentAddressMutation();

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
                    onImageUrlChange={(data:any) => setFieldValue("address", data)}
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
