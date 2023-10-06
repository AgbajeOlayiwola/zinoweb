"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import Inputs from "@/Component/Input";
import Select from "@/Component/Select";
import { identification } from "@/utils/data";
import React, { useState, useEffect } from "react";
import styles from "../../styles.module.css";
import InputFile from "@/Component/InputFile/indx";
import Link from "next/link";
import Already from "@/Component/SmallComponents/Already";
import Onboarding from "@/Component/Layout/Onboarding";
import SolarCamera from "@/Component/SVGS/solarCamera";
import { Formik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "@/reduxtoolkit/Provider/store";
import { useVerifyFarmerIdMutation } from "@/reduxtoolkit/api/mutationApi";
const StepTwo = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const dispatch = useAppDispatch();
  const [selectedIdentification, setSelectedIdentification] = useState<
    string | undefined
  >(undefined);
  const [
    verifyFarmerId,
    {
      data: verifyFarmerIdData,
      isLoading: uverifyFarmerIdLoad,
      isSuccess: verifyFarmerIdSuccess,
      isError: verifyFarmerIdFalse,
      error: verifyFarmerIdErr,
      reset: verifyFarmerIdReset,
    },
  ] = useVerifyFarmerIdMutation();

  useEffect(() => {
    console.log(verifyFarmerIdData);
    if (verifyFarmerIdData) {
      nextStep();
    }
  }, [verifyFarmerIdSuccess, verifyFarmerIdData]);

  const [selectedFile, setSelectedFile] = useState(null);

  const initSchema = yup.object().shape({
    id_type: yup.string(),
    id_number: yup.string(),
    expiry: yup.string(),
    document: yup.string(),
  });
  const initialValues = {
    id_type: "",
    id_number: "",
    expiry: "",
    document: "",
  };
  return (
    <div>
      <Onboarding steps={step}>
        {verifyFarmerIdErr ? (
          <p>{verifyFarmerIdErr?.data?.error?.message}</p>
        ) : null}
        <div className={styles.onBoardingLayout}>
          <Formik
            validationSchema={initSchema}
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              verifyFarmerId(values);
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
                <div>
                  <Select
                    onSelectChange={(e: any) =>
                      setFieldValue("id_type", e.target.value)
                    }
                    label="Type of Identification"
                    dataSet={identification}
                  />
                  <br />
                  <br />
                  {values.id_type === "Vnin" ? (
                    <>
                      <Inputs
                        onchange={(e: any) =>
                          setFieldValue("id_number", e.target.value)
                        }
                        name="id_number"
                        value={values.id_number}
                        type="text"
                        label="Vnin Number"
                        placeholder="Text here...."
                      />
                      <br />
                      <br />
                    </>
                  ) : (
                    <>
                      <Inputs
                        onchange={(e: any) =>
                          setFieldValue("id_number", e.target.value)
                        }
                        name="id_number"
                        value={values.id_number}
                        type="text"
                        label=" ID Number"
                        placeholder="Text here...."
                      />
                      <br />
                      <br />

                      <Inputs
                        onchange={(e: any) =>
                          setFieldValue("expiry", e.target.value)
                        }
                        name="expiry"
                        value={values.expiry}
                        type="date"
                        label="Expiry Date"
                        placeholder="Choose..."
                      />
                      <br />
                      <br />

                      <InputFile
                        label="Identification Card Photo"
                        name="document"
                        disclaimer=""
                        icon={<SolarCamera />}
                        uploadLabel="Upload ID"
                        onImageUrlChange={(data: any) =>
                          setFieldValue("document", data)
                        }
                      />
                      <br />
                      <br />
                    </>
                  )}
                </div>
                <FirstButton
                  loads={uverifyFarmerIdLoad}
                  type="Submit"
                  text="Continue"
                />
              </form>
            )}
          </Formik>
        </div>
      </Onboarding>
    </div>
  );
};

export default StepTwo;
